class HttpApi {
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => {
                return res.json();
            })
            .then(response => {
                if(response.code==0){
                    resolve(response.data);
                }else{
                    console.log(response.msg)
                }
            })
            .catch(err => reject(err));
        });
    }

    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(data => {
                    if (response.code == 0) {
                      resolve(response.data);
                    } else {
                      console.log(response.msg);
                    }
                })
                .catch(err => reject(err));
        });
    }

    // put
    put(url,data){
        return new Promise((resolve,reject) => {
            fetch(url,{
                method:"PUT",
                headers:{
                'Content-type':'application/json'
                },
                body:JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }

    // delete
    delete(url){
        return new Promise((resolve,reject) => {
            fetch(url,{
                method:"DELETE",
                headers:{
                'Content-type':'application/json'
                }
            })
                .then(res => res.json())
                .then(data => resolve('删除成功!'))
                .catch(err => reject(err))
        })
    }
}
const http = new HttpApi();
export default http;
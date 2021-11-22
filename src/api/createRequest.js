export default function createRequest(urlBase){
    return async function createRequest(){
        const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/'+ urlBase;
        console.log(url);
        let res;
        try {
             await fetch(
                 url,
                 {
                 header:{
                    'Content - Type': 'application/json',
                    'Accept': 'application/json'
                },
               }
               ).then(
                (result) => result.json())
                .then((data) => {
                    res = data;
            })

        } catch(e) {
            res = `Ошибка: ${e}`
        } finally {
            console.log(res);
            return res;

        }
    }
};

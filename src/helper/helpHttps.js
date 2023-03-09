
export const helpHTTP = () => {

    const customFetch = (endpoint, options) =>{
        const defaultHeader = {
            accept: "application/json"
        }
        const controller = new AbortController();

        options.signal = controller.signal;
        options.method = options.method || "GET";
        options.headers = options.headers 

         ? {...defaultHeader, ...options.headers}
         : defaultHeader;
         options.body = JSON.stringify(options.body) || false;

         if (!options.body) delete options.body;

         //aquí se logra ver el comportamiento de las opciones

         console.log (options);
         setTimeout(() => {
            controller.abort();
         }, 3000);

         return fetch (endpoint, options)
            .then((response) =>
            response.ok 
             ? response.json()
             : Promise.reject({
                err: true,
                status: response.status || "00", //estas son propiedades que no siempre se envian 
                statusText: response.statusText || "Ocurrió un error",

            })

        )
        .catch ((err) => err);
    }

    const get = (url, option = {}) => customFetch (url, option)

    const post = (url, options = {}) => {
        options.method = 'POST'
        return customFetch (url, options)
    }

    const put = (url, options = {}) => {
        option.method = "PUT"
        return customFetch (url, option)
    }

    const del = (url, option) => {
        option.method = "DELETE";
        return customFetch (url, option)
    }

    return {
        get: get,
        post: post,
        put: put,
        del: del,
    }
}
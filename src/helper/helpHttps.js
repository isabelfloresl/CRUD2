
export const helpHTTP = () => {

    const customFetch = (endpoint, options) =>{
        const defaultHeader = {
            accept: "application/json"
        };
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
         }, 6000);

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
    };

    const get = (url, options = {}) => customFetch (url, options) //.then(response=>console.log(response))

    const post = (url, options = {}) => {
        options.method = "POST"
        return customFetch (url, options)
    }

    const put = (url, options = {}) => {
        options.method = "PUT"
        return customFetch (url, options)
    }

    const del = (url, options) => {
        options.method = "DELETE";
        return customFetch (url, options)
    }

    return {
        get: get,
        post: post,
        put: put,
        del: del,
    }
}
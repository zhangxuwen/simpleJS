function simpleAxios(config) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        // 判断是否有params选项，携带查询参数
        if(config.params) {
            
            // URLSearchParams转换
            const paramsObj = new URLSearchParams(config.params)
            const queryString = paramsObj.toString()
            
            // 查询参数字符串，拼接
            config.url += `?{queryString}`
        }

        xhr.open(config.method || 'GET', config.url)
        xhr.addEventListener('loadend', () => {
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(JSON.parse(xhr.response))
            } else {
                reject(new Error(xhr.response))
            }
        })
        xhr.send()
    })
}
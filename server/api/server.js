export default defineEventHandler(async () => {
    
    // handle query parameter
    // const { name } = useQuery(event)

    // // handle post data
    // const { age } = await useBody(event)
    
    // return {
    //     message: `Hello, ${name}! I am ${age}years old.`
    // }

    // api call with private key
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_j7NIv9SBBrmguKWoSclTPasRSfEgr6IfkAy2nq5S')

    return data 
    
})
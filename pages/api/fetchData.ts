import axios from "axios";

export const FetchData = {
   async getStateData(url: string) {
       try {
           const {data} = await axios.get(url, {
               headers: {
                    'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
                   'X-RapidAPI-Key': '3927eff818msh371833ed6939114p1d1436jsnef221ac992b9'
               }
           })
           return {data: data}
       } catch (err) {
           console.log(err)
       }
   }
}









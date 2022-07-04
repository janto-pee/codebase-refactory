import axios from 'axios'

export const fetchAPI = async () => {
    try {
        const {data} = await axios.get('https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&q=skincare', {
            headers: {
                'X-RapidAPI-Key': '567ba7ddcbmsh1610340a21e73abp15ac7cjsn8a3813e9e8e1',
                'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
              }
        });
        // console.log(data)
        return data

    } catch (err) {
        console.error(err);
    }
};
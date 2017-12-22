const sub_category = [
    {
        season_name : '春天',
        season_code : 'spring'
    },
    {
        season_name : '夏天',
        season_code : 'summer'
    },
    {
        season_name : '秋天',
        season_code : 'autumn'
    },
    {
        season_name : '冬天',
        season_code : 'winter'
    }
]

const style = [
            {
                style_name : '鞋子',
                style_code : 'shoes'
            },
            {
                style_name : 'T恤',
                style_code : 'T'
            },
            {
                style_name : '毛衣',
                style_code : 'sweater'
            }
        ]

for (let value of sub_category){
    value.style = style
}


export { sub_category }
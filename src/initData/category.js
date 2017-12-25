const sub_category = [
    {
        season_name : '春季',
        season_code : 'spring'
    },
    {
        season_name : '夏季',
        season_code : 'summer'
    },
    {
        season_name : '秋季',
        season_code : 'autumn'
    },
    {
        season_name : '冬季',
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
## Schema 设计，例如：电商网站 goods, orders, cate, user 表
goods 文档NoSql的遍历，数据类型 json array
假设 amaze 农机产品
{
  _id: ObjectId(),
  name: 'Extra Large wheelbarrow',
  description: 'Heavy duty wheelbarrow...',
  text: '文本字段',
  details: {
    weight: 47,
    weight_units: 'lbs',
    model_num: 4032983402,
    manufacture: 'Acme',
    color: 'Red'
  },
  <!-- 多变的价格，如何设置？ -->
  pricing: {
    sale: 489700,
    retail: 589700
  },
  <!-- mongodb 非结构，碎片化数据 -->
  price_history: [
    {
      retail: 529700,
      sale: 429700,
      start: new Date(2017,11,11),
      end: new Date(2017,11,12)
    },
      {
      retail: 529700,
      sale: 419700,
      start: new Date(2018,5,1),
      end: new Date(2017,5,2)
    }
  ],
  total_reviews: 4,
  average_review: 4.5,
  created_at: ,
  updated_at: ,
  tags: ['tools', 'gardening', 'soil'],
  primary_category: ,
  <!-- 外键 -->
  category_ids: [
    ObjectId("fffffff"),
    ObjectId("dddddd")
  ]
}


var res = {};
res.data =
  {
    "took": 11934,
    "timed_out": false,
    "_shards": {
      "total": 3,
      "successful": 3,
      "skipped": 0,
      "failed": 0
    },
    "hits": {
      "total": 18481369,
      "max_score": 0.0,
      "hits": []
    },
    "aggregations": {
      "NAME": {
        "doc_count_error_upper_bound": -1,
        "sum_other_doc_count": 17506886,
        "buckets": [
          {
            "key": "金针菇",
            "doc_count": 38218,
            "sale": {
              "value": 663970.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 430,
              "sum_other_doc_count": 36291,
              "buckets": [
                {
                  "key": "重庆",
                  "doc_count": 1153
                },
                {
                  "key": "上海",
                  "doc_count": 774
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 55,
              "sum_other_doc_count": 37719,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 353
                },
                {
                  "key": "杨国福麻辣烫",
                  "doc_count": 146
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 38218,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1138033888",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/35053d3329532deb3a01ea321782cb23138024.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "土豆片",
            "doc_count": 18519,
            "sale": {
              "value": 435269.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 206,
              "sum_other_doc_count": 17533,
              "buckets": [
                {
                  "key": "长春",
                  "doc_count": 545
                },
                {
                  "key": "重庆",
                  "doc_count": 441
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 31,
              "sum_other_doc_count": 18251,
              "buckets": [
                {
                  "key": "张亮麻辣烫",
                  "doc_count": 134
                },
                {
                  "key": "杨国福麻辣烫",
                  "doc_count": 134
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 18519,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1335305145",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfudwm/099c1b9bf58e253394efb37467303b5c149271.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "羊肉串",
            "doc_count": 6600,
            "sale": {
              "value": 409410.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 80,
              "sum_other_doc_count": 6213,
              "buckets": [
                {
                  "key": "重庆",
                  "doc_count": 200
                },
                {
                  "key": "沈阳",
                  "doc_count": 187
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 9,
              "sum_other_doc_count": 6568,
              "buckets": [
                {
                  "key": "正新鸡排",
                  "doc_count": 20
                },
                {
                  "key": "东北烧烤",
                  "doc_count": 12
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 6600,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1123986018",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/wmproductdwm/5de8e59337dba6ab1abe54c3dd101616279484.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "娃娃菜",
            "doc_count": 23243,
            "sale": {
              "value": 378648.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 291,
              "sum_other_doc_count": 22084,
              "buckets": [
                {
                  "key": "上海",
                  "doc_count": 666
                },
                {
                  "key": "杭州",
                  "doc_count": 493
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 47,
              "sum_other_doc_count": 22785,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 296
                },
                {
                  "key": "张亮麻辣烫",
                  "doc_count": 162
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 23243,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "337967868",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/419c2d1ca3b64f1b17f68276ac3f4d54168260.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "土豆",
            "doc_count": 15170,
            "sale": {
              "value": 319617.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 182,
              "sum_other_doc_count": 14061,
              "buckets": [
                {
                  "key": "重庆",
                  "doc_count": 748
                },
                {
                  "key": "上海",
                  "doc_count": 361
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 25,
              "sum_other_doc_count": 14826,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 247
                },
                {
                  "key": "黄焖鸡米饭",
                  "doc_count": 97
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 15170,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "412178733",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfudwm/feedc906493b011fad3335c98bc3d0a7171461.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "鱼豆腐",
            "doc_count": 29649,
            "sale": {
              "value": 295592.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 334,
              "sum_other_doc_count": 28075,
              "buckets": [
                {
                  "key": "沈阳",
                  "doc_count": 913
                },
                {
                  "key": "哈尔滨",
                  "doc_count": 661
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 49,
              "sum_other_doc_count": 29126,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 338
                },
                {
                  "key": "张亮麻辣烫",
                  "doc_count": 185
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 29649,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "869885718",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/wmproductdwm/a3cacec27a41592a964d81951f743d13163914.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "米饭",
            "doc_count": 12179,
            "sale": {
              "value": 248818.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 150,
              "sum_other_doc_count": 11509,
              "buckets": [
                {
                  "key": "沈阳",
                  "doc_count": 344
                },
                {
                  "key": "北京",
                  "doc_count": 326
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 11,
              "sum_other_doc_count": 12065,
              "buckets": [
                {
                  "key": "沙县小吃",
                  "doc_count": 75
                },
                {
                  "key": "黄焖鸡米饭",
                  "doc_count": 39
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 12179,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "458988474",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/wmproductdwm/370352a9022162c3da81b83f63f3ce9c40525.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "鹌鹑蛋",
            "doc_count": 18061,
            "sale": {
              "value": 230661.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 199,
              "sum_other_doc_count": 16972,
              "buckets": [
                {
                  "key": "重庆",
                  "doc_count": 713
                },
                {
                  "key": "上海",
                  "doc_count": 376
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 40,
              "sum_other_doc_count": 17690,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 228
                },
                {
                  "key": "杨国福麻辣烫",
                  "doc_count": 143
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 18061,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1138756712",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/cfefade0243ef2c96742961a37aac415112489.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "韭菜",
            "doc_count": 12648,
            "sale": {
              "value": 225642.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 138,
              "sum_other_doc_count": 11791,
              "buckets": [
                {
                  "key": "重庆",
                  "doc_count": 584
                },
                {
                  "key": "上海",
                  "doc_count": 273
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 17,
              "sum_other_doc_count": 12508,
              "buckets": [
                {
                  "key": "菜文基",
                  "doc_count": 102
                },
                {
                  "key": "农鲜活",
                  "doc_count": 38
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 12648,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "108727921",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/3b10613a248c49476918340c3f205655159616.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "面筋",
            "doc_count": 13035,
            "sale": {
              "value": 225437.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 142,
              "sum_other_doc_count": 12591,
              "buckets": [
                {
                  "key": "兰州",
                  "doc_count": 230
                },
                {
                  "key": "银川",
                  "doc_count": 214
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 20,
              "sum_other_doc_count": 12879,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 91
                },
                {
                  "key": "张亮麻辣烫",
                  "doc_count": 65
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 13035,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1335392336",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/461574f8fd83e4d2deb55d1a9f248edf216520.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "藕片",
            "doc_count": 17477,
            "sale": {
              "value": 222699.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 215,
              "sum_other_doc_count": 16239,
              "buckets": [
                {
                  "key": "重庆",
                  "doc_count": 848
                },
                {
                  "key": "哈尔滨",
                  "doc_count": 390
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 34,
              "sum_other_doc_count": 17095,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 236
                },
                {
                  "key": "张亮麻辣烫",
                  "doc_count": 146
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 17477,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "280253524",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/ce45207d00c018609c96eff49a3f6ec4136362.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "五花肉",
            "doc_count": 9941,
            "sale": {
              "value": 220614.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 131,
              "sum_other_doc_count": 9383,
              "buckets": [
                {
                  "key": "重庆",
                  "doc_count": 284
                },
                {
                  "key": "杭州",
                  "doc_count": 274
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 16,
              "sum_other_doc_count": 9818,
              "buckets": [
                {
                  "key": "菜文基",
                  "doc_count": 74
                },
                {
                  "key": "农鲜活",
                  "doc_count": 49
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 9941,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1078659604",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/wmproductdwm/699a7d79b7c41a31537bcd1605f1e6a8202482.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "豆皮",
            "doc_count": 11551,
            "sale": {
              "value": 186903.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 146,
              "sum_other_doc_count": 10315,
              "buckets": [
                {
                  "key": "重庆",
                  "doc_count": 906
                },
                {
                  "key": "长春",
                  "doc_count": 330
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 23,
              "sum_other_doc_count": 11312,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 125
                },
                {
                  "key": "杨国福麻辣烫",
                  "doc_count": 114
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 11551,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1002162815",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfudwm/e824a6b832d6cdff47fe35a6727fb6d0162919.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "海带",
            "doc_count": 15530,
            "sale": {
              "value": 185132.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 173,
              "sum_other_doc_count": 14543,
              "buckets": [
                {
                  "key": "重庆",
                  "doc_count": 567
                },
                {
                  "key": "长春",
                  "doc_count": 420
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 24,
              "sum_other_doc_count": 15289,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 147
                },
                {
                  "key": "杨国福麻辣烫",
                  "doc_count": 94
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 15530,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "108727916",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfudwm/f6ff96aabe1f1de5a362843ae41045c4113589.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "牛肉串",
            "doc_count": 4641,
            "sale": {
              "value": 177913.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 68,
              "sum_other_doc_count": 4322,
              "buckets": [
                {
                  "key": "沈阳",
                  "doc_count": 199
                },
                {
                  "key": "杭州",
                  "doc_count": 120
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 6,
              "sum_other_doc_count": 4599,
              "buckets": [
                {
                  "key": "煌上煌",
                  "doc_count": 32
                },
                {
                  "key": "兄弟烧烤",
                  "doc_count": 10
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 4641,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "412185476",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfudwm/1e3c8950506792cda8f73faa57eb746c246618.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "脆骨",
            "doc_count": 3410,
            "sale": {
              "value": 177085.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 54,
              "sum_other_doc_count": 3178,
              "buckets": [
                {
                  "key": "重庆",
                  "doc_count": 130
                },
                {
                  "key": "长春",
                  "doc_count": 102
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 6,
              "sum_other_doc_count": 3375,
              "buckets": [
                {
                  "key": "农鲜活",
                  "doc_count": 21
                },
                {
                  "key": "胖子烧烤",
                  "doc_count": 14
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 3410,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "412186208",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfudwm/78e7cac8d8bb574ea05beb932738077a190662.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "生菜",
            "doc_count": 21351,
            "sale": {
              "value": 177045.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 251,
              "sum_other_doc_count": 20393,
              "buckets": [
                {
                  "key": "上海",
                  "doc_count": 532
                },
                {
                  "key": "杭州",
                  "doc_count": 426
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 47,
              "sum_other_doc_count": 20860,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 333
                },
                {
                  "key": "杨国福麻辣烫",
                  "doc_count": 158
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 21351,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1136648048",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/061643080c901e133ceb659549b8bb74205175.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "骨肉相连",
            "doc_count": 27106,
            "sale": {
              "value": 176783.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 303,
              "sum_other_doc_count": 25954,
              "buckets": [
                {
                  "key": "沈阳",
                  "doc_count": 606
                },
                {
                  "key": "重庆",
                  "doc_count": 546
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 36,
              "sum_other_doc_count": 26910,
              "buckets": [
                {
                  "key": "杨国福麻辣烫",
                  "doc_count": 107
                },
                {
                  "key": "张亮麻辣烫",
                  "doc_count": 89
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 27106,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "795546996",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/wmproductdwm/c92a141e8567425ee40231fb24310f28309833.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "腐竹",
            "doc_count": 16818,
            "sale": {
              "value": 172353.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 186,
              "sum_other_doc_count": 16078,
              "buckets": [
                {
                  "key": "上海",
                  "doc_count": 414
                },
                {
                  "key": "苏州",
                  "doc_count": 326
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 40,
              "sum_other_doc_count": 16319,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 353
                },
                {
                  "key": "杨国福麻辣烫",
                  "doc_count": 146
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 16818,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "776550206",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfudwm/91606765df43a860a14689a0bbf4c011152932.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "香菜",
            "doc_count": 16968,
            "sale": {
              "value": 162462.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 198,
              "sum_other_doc_count": 16123,
              "buckets": [
                {
                  "key": "重庆",
                  "doc_count": 435
                },
                {
                  "key": "哈尔滨",
                  "doc_count": 410
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 37,
              "sum_other_doc_count": 16572,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 220
                },
                {
                  "key": "杨国福麻辣烫",
                  "doc_count": 176
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 16968,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "227631554",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/wmproductdwm/53cb4fab2f45b8afbfb7d639fdd21008155274.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "菠菜",
            "doc_count": 16738,
            "sale": {
              "value": 160809.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 191,
              "sum_other_doc_count": 15904,
              "buckets": [
                {
                  "key": "上海",
                  "doc_count": 417
                },
                {
                  "key": "哈尔滨",
                  "doc_count": 417
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 40,
              "sum_other_doc_count": 16272,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 301
                },
                {
                  "key": "杨国福麻辣烫",
                  "doc_count": 165
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 16738,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "227611744",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/2b60927c3d8dee951ef7ff4b110353da175932.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "香菇",
            "doc_count": 22660,
            "sale": {
              "value": 157307.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 245,
              "sum_other_doc_count": 21260,
              "buckets": [
                {
                  "key": "重庆",
                  "doc_count": 788
                },
                {
                  "key": "上海",
                  "doc_count": 612
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 44,
              "sum_other_doc_count": 22217,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 326
                },
                {
                  "key": "杨国福麻辣烫",
                  "doc_count": 117
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 22660,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1136899099",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/cf6410562fdb0afa16ffeecba4c9f550139043.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "掌中宝",
            "doc_count": 6131,
            "sale": {
              "value": 149207.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 113,
              "sum_other_doc_count": 5585,
              "buckets": [
                {
                  "key": "上海",
                  "doc_count": 320
                },
                {
                  "key": "杭州",
                  "doc_count": 226
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 11,
              "sum_other_doc_count": 6087,
              "buckets": [
                {
                  "key": "胖子烧烤",
                  "doc_count": 23
                },
                {
                  "key": "兄弟烧烤",
                  "doc_count": 21
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 6131,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1335427767",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/400a353d81de900616126205d18105c6220565.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "木耳",
            "doc_count": 20211,
            "sale": {
              "value": 147885.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 218,
              "sum_other_doc_count": 18872,
              "buckets": [
                {
                  "key": "重庆",
                  "doc_count": 894
                },
                {
                  "key": "哈尔滨",
                  "doc_count": 445
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 40,
              "sum_other_doc_count": 19833,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 217
                },
                {
                  "key": "杨国福麻辣烫",
                  "doc_count": 161
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 20211,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "337967869",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfudwm/3d86b824f5667b735d21de1d7db08546198086.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "猪肉串",
            "doc_count": 1526,
            "sale": {
              "value": 145910.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 25,
              "sum_other_doc_count": 1427,
              "buckets": [
                {
                  "key": "哈尔滨",
                  "doc_count": 55
                },
                {
                  "key": "齐齐哈尔",
                  "doc_count": 44
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 3,
              "sum_other_doc_count": 1509,
              "buckets": [
                {
                  "key": "正新鸡排",
                  "doc_count": 10
                },
                {
                  "key": "东北烧烤",
                  "doc_count": 7
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 1526,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "495044329",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfuwm/ff349a2731d48acb1188678157b742ce337101.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "油麦菜",
            "doc_count": 16566,
            "sale": {
              "value": 135904.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 194,
              "sum_other_doc_count": 15478,
              "buckets": [
                {
                  "key": "长春",
                  "doc_count": 616
                },
                {
                  "key": "沈阳",
                  "doc_count": 472
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 38,
              "sum_other_doc_count": 16231,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 178
                },
                {
                  "key": "杨国福麻辣烫",
                  "doc_count": 157
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 16566,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1217938580",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/wmproductdwm/be191d53da6197e563e2391be8af0687517821.png"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "鸭血",
            "doc_count": 13886,
            "sale": {
              "value": 135551.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 181,
              "sum_other_doc_count": 13271,
              "buckets": [
                {
                  "key": "上海",
                  "doc_count": 315
                },
                {
                  "key": "沈阳",
                  "doc_count": 300
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 36,
              "sum_other_doc_count": 13490,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 227
                },
                {
                  "key": "杨国福麻辣烫",
                  "doc_count": 169
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 13886,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1052531189",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/wmproductdwm/b44a4da39848c1580cc150dcb8733c73314930.png"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "豆腐皮",
            "doc_count": 8975,
            "sale": {
              "value": 135440.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 109,
              "sum_other_doc_count": 8472,
              "buckets": [
                {
                  "key": "昆明",
                  "doc_count": 294
                },
                {
                  "key": "贵阳",
                  "doc_count": 209
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 15,
              "sum_other_doc_count": 8806,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 130
                },
                {
                  "key": "张亮麻辣烫",
                  "doc_count": 39
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 8975,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1263874357",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/bcdb254f4eb04a3220242cd6d496e606190167.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "宽粉",
            "doc_count": 9761,
            "sale": {
              "value": 131683.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 142,
              "sum_other_doc_count": 9195,
              "buckets": [
                {
                  "key": "石家庄",
                  "doc_count": 296
                },
                {
                  "key": "北京",
                  "doc_count": 270
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 28,
              "sum_other_doc_count": 9458,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 222
                },
                {
                  "key": "杨国福麻辣烫",
                  "doc_count": 81
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 9761,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "278163080",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/9e889de74c7907d7c00f4d44f4130a9098185.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "平菇",
            "doc_count": 10825,
            "sale": {
              "value": 128040.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 134,
              "sum_other_doc_count": 9734,
              "buckets": [
                {
                  "key": "重庆",
                  "doc_count": 789
                },
                {
                  "key": "成都",
                  "doc_count": 302
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 24,
              "sum_other_doc_count": 10657,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 99
                },
                {
                  "key": "杨国福麻辣烫",
                  "doc_count": 69
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 10825,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "337968695",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfudwm/82f54f3ea30a7f66c4c01da0b48cf4e4157812.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "牛肉",
            "doc_count": 6941,
            "sale": {
              "value": 124790.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 90,
              "sum_other_doc_count": 6529,
              "buckets": [
                {
                  "key": "杭州",
                  "doc_count": 210
                },
                {
                  "key": "重庆",
                  "doc_count": 202
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 15,
              "sum_other_doc_count": 6810,
              "buckets": [
                {
                  "key": "黄记煌三汁焖锅",
                  "doc_count": 85
                },
                {
                  "key": "重庆小面",
                  "doc_count": 46
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 6941,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1056614591",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/1d0d427a4c40740f0c4e2a31cd92ce74170461.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "火腿肠",
            "doc_count": 9858,
            "sale": {
              "value": 120526.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 128,
              "sum_other_doc_count": 8996,
              "buckets": [
                {
                  "key": "重庆",
                  "doc_count": 665
                },
                {
                  "key": "成都",
                  "doc_count": 197
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 13,
              "sum_other_doc_count": 9727,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 92
                },
                {
                  "key": "重庆麻辣烫",
                  "doc_count": 39
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 9858,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1335427763",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/7eb7151df58b497c56121301d894b953182572.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "豆芽",
            "doc_count": 11496,
            "sale": {
              "value": 119816.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 126,
              "sum_other_doc_count": 10617,
              "buckets": [
                {
                  "key": "重庆",
                  "doc_count": 539
                },
                {
                  "key": "长春",
                  "doc_count": 340
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 24,
              "sum_other_doc_count": 11301,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 102
                },
                {
                  "key": "杨国福麻辣烫",
                  "doc_count": 93
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 11496,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1052731002",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/wmproductdwm/85ce5ba5f1ad221d771b883571409c47363866.png"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "培根",
            "doc_count": 13622,
            "sale": {
              "value": 114664.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 157,
              "sum_other_doc_count": 13104,
              "buckets": [
                {
                  "key": "上海",
                  "doc_count": 269
                },
                {
                  "key": "苏州",
                  "doc_count": 249
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 41,
              "sum_other_doc_count": 13369,
              "buckets": [
                {
                  "key": "张亮麻辣烫",
                  "doc_count": 132
                },
                {
                  "key": "杨国福麻辣烫",
                  "doc_count": 121
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 13622,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "337967884",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/31b12800c77cfa00ed054d93a2568280156439.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "热狗",
            "doc_count": 9150,
            "sale": {
              "value": 113949.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 141,
              "sum_other_doc_count": 8655,
              "buckets": [
                {
                  "key": "东莞",
                  "doc_count": 249
                },
                {
                  "key": "杭州",
                  "doc_count": 246
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 14,
              "sum_other_doc_count": 9022,
              "buckets": [
                {
                  "key": "沙县小吃",
                  "doc_count": 88
                },
                {
                  "key": "重庆麻辣烫",
                  "doc_count": 40
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 9150,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "180567845",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfudwm/da50fdbe727b3c4ae4528b948e868d87111814.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "花菜",
            "doc_count": 9718,
            "sale": {
              "value": 111183.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 174,
              "sum_other_doc_count": 8710,
              "buckets": [
                {
                  "key": "重庆",
                  "doc_count": 587
                },
                {
                  "key": "上海",
                  "doc_count": 421
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 22,
              "sum_other_doc_count": 9504,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 155
                },
                {
                  "key": "重庆麻辣烫",
                  "doc_count": 59
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 9718,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "776547503",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/573dd2520496e43e9cc47bc1c30ba53c201287.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "年糕",
            "doc_count": 9471,
            "sale": {
              "value": 109972.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 142,
              "sum_other_doc_count": 8465,
              "buckets": [
                {
                  "key": "重庆",
                  "doc_count": 553
                },
                {
                  "key": "上海",
                  "doc_count": 453
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 18,
              "sum_other_doc_count": 9274,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 138
                },
                {
                  "key": "重庆麻辣烫",
                  "doc_count": 59
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 9471,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "412178735",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfudwm/3d30cd8e8d60d2d1dfeb81718772f4ae126029.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "西兰花",
            "doc_count": 11356,
            "sale": {
              "value": 107388.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 147,
              "sum_other_doc_count": 10834,
              "buckets": [
                {
                  "key": "上海",
                  "doc_count": 286
                },
                {
                  "key": "兰州",
                  "doc_count": 236
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 33,
              "sum_other_doc_count": 11125,
              "buckets": [
                {
                  "key": "张亮麻辣烫",
                  "doc_count": 118
                },
                {
                  "key": "杨国福麻辣烫",
                  "doc_count": 113
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 11356,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1010346153",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfudwm/c9f865a6e501d9e997e37ca20d669f92149037.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "里脊肉",
            "doc_count": 6163,
            "sale": {
              "value": 106130.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 121,
              "sum_other_doc_count": 5453,
              "buckets": [
                {
                  "key": "上海",
                  "doc_count": 391
                },
                {
                  "key": "苏州",
                  "doc_count": 319
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 17,
              "sum_other_doc_count": 6068,
              "buckets": [
                {
                  "key": "菜文基",
                  "doc_count": 56
                },
                {
                  "key": "重庆麻辣烫",
                  "doc_count": 39
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 6163,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "210696200",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfudwm/db4eb369b7acfb85f95a435ba18e5bf6176993.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "鸡胗",
            "doc_count": 9180,
            "sale": {
              "value": 103782.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 125,
              "sum_other_doc_count": 8616,
              "buckets": [
                {
                  "key": "上海",
                  "doc_count": 305
                },
                {
                  "key": "沈阳",
                  "doc_count": 259
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 13,
              "sum_other_doc_count": 9092,
              "buckets": [
                {
                  "key": "菜文基",
                  "doc_count": 58
                },
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 30
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 9180,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "920587985",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfudwm/c411ca9251c3f0b0e973d718ffb8cd7e124133.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "牛板筋",
            "doc_count": 5826,
            "sale": {
              "value": 99100.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 84,
              "sum_other_doc_count": 5397,
              "buckets": [
                {
                  "key": "上海",
                  "doc_count": 236
                },
                {
                  "key": "杭州",
                  "doc_count": 193
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 10,
              "sum_other_doc_count": 5777,
              "buckets": [
                {
                  "key": "胖子烧烤",
                  "doc_count": 25
                },
                {
                  "key": "兄弟烧烤",
                  "doc_count": 24
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 5826,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1041686154",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/wmproductdwm/335e2830f92a1cb41e0fe47f881b8f23331013.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "甜不辣",
            "doc_count": 10134,
            "sale": {
              "value": 99000.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 174,
              "sum_other_doc_count": 9202,
              "buckets": [
                {
                  "key": "青岛",
                  "doc_count": 563
                },
                {
                  "key": "石家庄",
                  "doc_count": 369
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 32,
              "sum_other_doc_count": 9840,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 178
                },
                {
                  "key": "杨国福麻辣烫",
                  "doc_count": 116
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 10134,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "450717663",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/wmproduct/9aeebfe0664e552a209cbd0c6c272ed8288197.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "茼蒿",
            "doc_count": 10529,
            "sale": {
              "value": 97088.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 120,
              "sum_other_doc_count": 9989,
              "buckets": [
                {
                  "key": "沈阳",
                  "doc_count": 345
                },
                {
                  "key": "银川",
                  "doc_count": 195
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 25,
              "sum_other_doc_count": 10267,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 144
                },
                {
                  "key": "张亮麻辣烫",
                  "doc_count": 118
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 10529,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1036300490",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/e0f463222264da14ce0cc77679a626a3151626.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "鸡柳",
            "doc_count": 10061,
            "sale": {
              "value": 95174.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 114,
              "sum_other_doc_count": 9697,
              "buckets": [
                {
                  "key": "东莞",
                  "doc_count": 184
                },
                {
                  "key": "深圳",
                  "doc_count": 180
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 17,
              "sum_other_doc_count": 9957,
              "buckets": [
                {
                  "key": "重庆麻辣烫",
                  "doc_count": 55
                },
                {
                  "key": "杨国福麻辣烫",
                  "doc_count": 49
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 10061,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1169171169",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/wmproductdwm/f89fcb2788ec299fee787b80b5247817175448.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "烤肠",
            "doc_count": 7300,
            "sale": {
              "value": 94486.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 105,
              "sum_other_doc_count": 6890,
              "buckets": [
                {
                  "key": "合肥",
                  "doc_count": 214
                },
                {
                  "key": "临沂",
                  "doc_count": 196
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 14,
              "sum_other_doc_count": 7169,
              "buckets": [
                {
                  "key": "张亮麻辣烫",
                  "doc_count": 70
                },
                {
                  "key": "正新鸡排",
                  "doc_count": 61
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 7300,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1138829193",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/d361d8612b0a849aca43dbb0af1e8dcd161157.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "撒尿牛丸",
            "doc_count": 10078,
            "sale": {
              "value": 92645.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 118,
              "sum_other_doc_count": 9611,
              "buckets": [
                {
                  "key": "哈尔滨",
                  "doc_count": 235
                },
                {
                  "key": "沈阳",
                  "doc_count": 232
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 24,
              "sum_other_doc_count": 9805,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 143
                },
                {
                  "key": "张亮麻辣烫",
                  "doc_count": 130
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 10078,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1135204407",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/97e5b6b83c552e630216d787a8cb96f7163412.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "酸辣土豆丝",
            "doc_count": 23124,
            "sale": {
              "value": 91128.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 295,
              "sum_other_doc_count": 21777,
              "buckets": [
                {
                  "key": "杭州",
                  "doc_count": 712
                },
                {
                  "key": "苏州",
                  "doc_count": 635
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 23,
              "sum_other_doc_count": 22824,
              "buckets": [
                {
                  "key": "兰州拉面",
                  "doc_count": 204
                },
                {
                  "key": "中国兰州拉面",
                  "doc_count": 96
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 23124,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1219247425",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/32c1ae2a825f10199db414c046208f69160076.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "鸡爪",
            "doc_count": 8197,
            "sale": {
              "value": 89178.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 111,
              "sum_other_doc_count": 7792,
              "buckets": [
                {
                  "key": "杭州",
                  "doc_count": 206
                },
                {
                  "key": "上海",
                  "doc_count": 199
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 16,
              "sum_other_doc_count": 8069,
              "buckets": [
                {
                  "key": "沙县小吃",
                  "doc_count": 68
                },
                {
                  "key": "菜文基",
                  "doc_count": 60
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 8197,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "180567850",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/437b9d38174edcbf403b11d63d8f13b2159733.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "千叶豆腐",
            "doc_count": 13577,
            "sale": {
              "value": 87170.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 172,
              "sum_other_doc_count": 12809,
              "buckets": [
                {
                  "key": "重庆",
                  "doc_count": 397
                },
                {
                  "key": "上海",
                  "doc_count": 371
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 22,
              "sum_other_doc_count": 13318,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 158
                },
                {
                  "key": "张亮麻辣烫",
                  "doc_count": 101
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 13577,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "691876337",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/67d66673001d0b8184725f152024e078128811.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "鸡皮",
            "doc_count": 5260,
            "sale": {
              "value": 84724.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 81,
              "sum_other_doc_count": 4580,
              "buckets": [
                {
                  "key": "沈阳",
                  "doc_count": 353
                },
                {
                  "key": "重庆",
                  "doc_count": 327
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 8,
              "sum_other_doc_count": 5236,
              "buckets": [
                {
                  "key": "望京小腰",
                  "doc_count": 15
                },
                {
                  "key": "兄弟烧烤",
                  "doc_count": 9
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 5260,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "421441997",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/2b476ab3b6cfd3898c6abd860a17e5bc133407.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "板筋",
            "doc_count": 3146,
            "sale": {
              "value": 84712.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 50,
              "sum_other_doc_count": 2799,
              "buckets": [
                {
                  "key": "长春",
                  "doc_count": 198
                },
                {
                  "key": "沈阳",
                  "doc_count": 149
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 6,
              "sum_other_doc_count": 3132,
              "buckets": [
                {
                  "key": "东北烧烤",
                  "doc_count": 7
                },
                {
                  "key": "大喜龙虾",
                  "doc_count": 7
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 3146,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1335392323",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/9037e1c0ceea26c1e4aabff936d584ec154242.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "冬瓜",
            "doc_count": 10823,
            "sale": {
              "value": 83379.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 150,
              "sum_other_doc_count": 10029,
              "buckets": [
                {
                  "key": "重庆",
                  "doc_count": 475
                },
                {
                  "key": "上海",
                  "doc_count": 319
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 26,
              "sum_other_doc_count": 10468,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 269
                },
                {
                  "key": "杨国福麻辣烫",
                  "doc_count": 86
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 10823,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "337968694",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfudwm/8d9fb6f7caa8c366919ba0ca7d7a02f4116302.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "蘑菇",
            "doc_count": 5058,
            "sale": {
              "value": 82447.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 69,
              "sum_other_doc_count": 4747,
              "buckets": [
                {
                  "key": "青岛",
                  "doc_count": 164
                },
                {
                  "key": "济宁",
                  "doc_count": 147
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 11,
              "sum_other_doc_count": 4905,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 118
                },
                {
                  "key": "渔人杰",
                  "doc_count": 35
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 5058,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "348562536",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfudwm/6dcd3363038deb8770a9f66bc638b492145967.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "鸡脆骨",
            "doc_count": 3158,
            "sale": {
              "value": 80429.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 55,
              "sum_other_doc_count": 2768,
              "buckets": [
                {
                  "key": "沈阳",
                  "doc_count": 246
                },
                {
                  "key": "天津",
                  "doc_count": 144
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 6,
              "sum_other_doc_count": 3114,
              "buckets": [
                {
                  "key": "黄记煌三汁焖锅",
                  "doc_count": 29
                },
                {
                  "key": "优同",
                  "doc_count": 15
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 3158,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1244542985",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfudwm/61ba4a8315521e9bcdc27d7375eb73f2197398.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "海带丝",
            "doc_count": 9298,
            "sale": {
              "value": 79375.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 110,
              "sum_other_doc_count": 8799,
              "buckets": [
                {
                  "key": "上海",
                  "doc_count": 265
                },
                {
                  "key": "沈阳",
                  "doc_count": 234
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 25,
              "sum_other_doc_count": 9069,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 144
                },
                {
                  "key": "杨国福麻辣烫",
                  "doc_count": 85
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 9298,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1168591572",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfudwm/c7c43c79417b5ad30a6d6e80af14f43c148114.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "鸭肠",
            "doc_count": 7011,
            "sale": {
              "value": 78210.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 86,
              "sum_other_doc_count": 6700,
              "buckets": [
                {
                  "key": "重庆",
                  "doc_count": 165
                },
                {
                  "key": "上海",
                  "doc_count": 146
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 22,
              "sum_other_doc_count": 6899,
              "buckets": [
                {
                  "key": "武汉黑鸭",
                  "doc_count": 73
                },
                {
                  "key": "超浔黑鸭",
                  "doc_count": 39
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 7011,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "337968713",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/7ad40e65b545ab2f83e76eb77090fcf8163777.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "油条",
            "doc_count": 4890,
            "sale": {
              "value": 77188.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 71,
              "sum_other_doc_count": 4622,
              "buckets": [
                {
                  "key": "上海",
                  "doc_count": 136
                },
                {
                  "key": "苏州",
                  "doc_count": 132
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 15,
              "sum_other_doc_count": 4756,
              "buckets": [
                {
                  "key": "杨国福麻辣烫",
                  "doc_count": 70
                },
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 64
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 4890,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "455385065",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/wmproductdwm/d03f1a2ee3bdb68bd935d523d1af033b68281.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "蟹棒",
            "doc_count": 10185,
            "sale": {
              "value": 75971.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 129,
              "sum_other_doc_count": 9500,
              "buckets": [
                {
                  "key": "哈尔滨",
                  "doc_count": 391
                },
                {
                  "key": "长春",
                  "doc_count": 294
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 28,
              "sum_other_doc_count": 9943,
              "buckets": [
                {
                  "key": "张亮麻辣烫",
                  "doc_count": 127
                },
                {
                  "key": "杨国福麻辣烫",
                  "doc_count": 115
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 10185,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "822475534",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfudwm/fa1466e77c0fb6126c5e3af1213a6cd3131787.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "鱿鱼须",
            "doc_count": 7119,
            "sale": {
              "value": 75531.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 99,
              "sum_other_doc_count": 6519,
              "buckets": [
                {
                  "key": "重庆",
                  "doc_count": 414
                },
                {
                  "key": "上海",
                  "doc_count": 186
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 12,
              "sum_other_doc_count": 7057,
              "buckets": [
                {
                  "key": "黄记煌三汁焖锅",
                  "doc_count": 38
                },
                {
                  "key": "三顾冒菜",
                  "doc_count": 24
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 7119,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1244542986",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfu/aa22592ddbc54470c7b1dd19b34ca74a415571.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "烤面筋",
            "doc_count": 2543,
            "sale": {
              "value": 70027.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 34,
              "sum_other_doc_count": 2385,
              "buckets": [
                {
                  "key": "北京",
                  "doc_count": 91
                },
                {
                  "key": "上海",
                  "doc_count": 67
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 6,
              "sum_other_doc_count": 2521,
              "buckets": [
                {
                  "key": "望京小腰",
                  "doc_count": 14
                },
                {
                  "key": "老地方烧烤",
                  "doc_count": 8
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 2543,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "239108710",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/68f59b8fd7e03ba6126e179d659d6ac4272624.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "素鸡",
            "doc_count": 4659,
            "sale": {
              "value": 68079.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 92,
              "sum_other_doc_count": 4188,
              "buckets": [
                {
                  "key": "上海",
                  "doc_count": 243
                },
                {
                  "key": "银川",
                  "doc_count": 228
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 9,
              "sum_other_doc_count": 4591,
              "buckets": [
                {
                  "key": "留夫鸭",
                  "doc_count": 36
                },
                {
                  "key": "沙县小吃",
                  "doc_count": 32
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 4659,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "821488177",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/wmproductdwm/5ccfcc335ec183db46e9c45ca25ed4e7393092.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "猪脆骨",
            "doc_count": 2148,
            "sale": {
              "value": 68044.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 37,
              "sum_other_doc_count": 1882,
              "buckets": [
                {
                  "key": "上海",
                  "doc_count": 151
                },
                {
                  "key": "杭州",
                  "doc_count": 115
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 6,
              "sum_other_doc_count": 2127,
              "buckets": [
                {
                  "key": "东北烧烤",
                  "doc_count": 11
                },
                {
                  "key": "望京小腰",
                  "doc_count": 10
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 2148,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "917073329",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/wmproductdwm/a261f94ac1dd25c943a69419697ca4d5115585.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "蟹排",
            "doc_count": 10291,
            "sale": {
              "value": 67775.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 98,
              "sum_other_doc_count": 9742,
              "buckets": [
                {
                  "key": "重庆",
                  "doc_count": 280
                },
                {
                  "key": "哈尔滨",
                  "doc_count": 269
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 28,
              "sum_other_doc_count": 10062,
              "buckets": [
                {
                  "key": "杨国福麻辣烫",
                  "doc_count": 122
                },
                {
                  "key": "张亮麻辣烫",
                  "doc_count": 107
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 10291,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1314205414",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfudwm/831b9ea93af0f9ba7d23f6da7b9201b2140691.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "煎蛋",
            "doc_count": 5381,
            "sale": {
              "value": 67369.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 73,
              "sum_other_doc_count": 4966,
              "buckets": [
                {
                  "key": "福州",
                  "doc_count": 211
                },
                {
                  "key": "南宁",
                  "doc_count": 204
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 14,
              "sum_other_doc_count": 5066,
              "buckets": [
                {
                  "key": "沙县小吃",
                  "doc_count": 258
                },
                {
                  "key": "兰州拉面",
                  "doc_count": 57
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 5381,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1397299219",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/9c3b686ea68db39ef9d5608b0e819c26131645.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "莲藕",
            "doc_count": 5497,
            "sale": {
              "value": 67329.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 78,
              "sum_other_doc_count": 5135,
              "buckets": [
                {
                  "key": "东莞",
                  "doc_count": 186
                },
                {
                  "key": "广州",
                  "doc_count": 176
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 17,
              "sum_other_doc_count": 5361,
              "buckets": [
                {
                  "key": "菜文基",
                  "doc_count": 96
                },
                {
                  "key": "农鲜活",
                  "doc_count": 40
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 5497,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1052575498",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/wmproductdwm/c79144a1953512e77ecd96e223715929304987.png"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "鱼丸",
            "doc_count": 13102,
            "sale": {
              "value": 67214.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 152,
              "sum_other_doc_count": 11927,
              "buckets": [
                {
                  "key": "沈阳",
                  "doc_count": 773
                },
                {
                  "key": "长春",
                  "doc_count": 402
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 22,
              "sum_other_doc_count": 12767,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 237
                },
                {
                  "key": "云南过桥米线",
                  "doc_count": 98
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 13102,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "455452857",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/882890fba2f502008b0f37a2f566f946115373.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "方便面",
            "doc_count": 5958,
            "sale": {
              "value": 63553.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 74,
              "sum_other_doc_count": 5672,
              "buckets": [
                {
                  "key": "哈尔滨",
                  "doc_count": 168
                },
                {
                  "key": "沈阳",
                  "doc_count": 118
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 17,
              "sum_other_doc_count": 5716,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 127
                },
                {
                  "key": "杨国福麻辣烫",
                  "doc_count": 115
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 5958,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1036263223",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/cd3f29b082bc5463cab6d53debef89cb161572.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "荷包蛋",
            "doc_count": 6002,
            "sale": {
              "value": 61802.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 102,
              "sum_other_doc_count": 5232,
              "buckets": [
                {
                  "key": "上海",
                  "doc_count": 412
                },
                {
                  "key": "杭州",
                  "doc_count": 358
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 13,
              "sum_other_doc_count": 5683,
              "buckets": [
                {
                  "key": "沙县小吃",
                  "doc_count": 277
                },
                {
                  "key": "淮南牛肉汤",
                  "doc_count": 42
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 6002,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "796526665",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfudwm/4a7acaa6cdff336fbbff2420225e2b02138457.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "烤韭菜",
            "doc_count": 4529,
            "sale": {
              "value": 61528.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 54,
              "sum_other_doc_count": 4226,
              "buckets": [
                {
                  "key": "北京",
                  "doc_count": 179
                },
                {
                  "key": "沈阳",
                  "doc_count": 124
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 6,
              "sum_other_doc_count": 4511,
              "buckets": [
                {
                  "key": "东北烧烤",
                  "doc_count": 9
                },
                {
                  "key": "刘二郎烤骨头",
                  "doc_count": 9
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 4529,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "524881502",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfudwm/665ea68af657dd1922f7d02f6cc0d57a266861.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "卤蛋",
            "doc_count": 5893,
            "sale": {
              "value": 61290.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 84,
              "sum_other_doc_count": 5464,
              "buckets": [
                {
                  "key": "上海",
                  "doc_count": 216
                },
                {
                  "key": "泉州",
                  "doc_count": 213
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 14,
              "sum_other_doc_count": 5179,
              "buckets": [
                {
                  "key": "沙县小吃",
                  "doc_count": 652
                },
                {
                  "key": "福建沙县小吃",
                  "doc_count": 62
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 5893,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "877859361",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfudwm/4771eba3c4786e8df072d15d4d3c540355124.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "亲亲肠",
            "doc_count": 12733,
            "sale": {
              "value": 59163.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 135,
              "sum_other_doc_count": 11912,
              "buckets": [
                {
                  "key": "沈阳",
                  "doc_count": 477
                },
                {
                  "key": "哈尔滨",
                  "doc_count": 344
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 43,
              "sum_other_doc_count": 12328,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 245
                },
                {
                  "key": "张亮麻辣烫",
                  "doc_count": 160
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 12733,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "489043694",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfuwm/9b81557f3e2ca31ad4ff8b4e8a677ca8435595.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "午餐肉",
            "doc_count": 8557,
            "sale": {
              "value": 58508.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 105,
              "sum_other_doc_count": 8110,
              "buckets": [
                {
                  "key": "上海",
                  "doc_count": 247
                },
                {
                  "key": "重庆",
                  "doc_count": 200
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 28,
              "sum_other_doc_count": 8343,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 148
                },
                {
                  "key": "杨国福麻辣烫",
                  "doc_count": 66
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 8557,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1002162828",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfudwm/d6cbfedad45131bf04891f0742f404cc140222.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "腊肠",
            "doc_count": 7890,
            "sale": {
              "value": 58290.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 106,
              "sum_other_doc_count": 7474,
              "buckets": [
                {
                  "key": "天津",
                  "doc_count": 222
                },
                {
                  "key": "常州",
                  "doc_count": 194
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 16,
              "sum_other_doc_count": 7724,
              "buckets": [
                {
                  "key": "杨国福麻辣烫",
                  "doc_count": 87
                },
                {
                  "key": "张亮麻辣烫",
                  "doc_count": 79
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 7890,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "920584273",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/2ce91d258d1f8e9a72a201f88831a0db263318.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "鱼香肉丝",
            "doc_count": 27087,
            "sale": {
              "value": 57528.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 328,
              "sum_other_doc_count": 25736,
              "buckets": [
                {
                  "key": "重庆",
                  "doc_count": 776
                },
                {
                  "key": "苏州",
                  "doc_count": 575
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 23,
              "sum_other_doc_count": 26934,
              "buckets": [
                {
                  "key": "沙县小吃",
                  "doc_count": 104
                },
                {
                  "key": "兰州拉面",
                  "doc_count": 49
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 27087,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1007204454",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfudwm/44e7e85ffd14759933eee5d6bb4ad14a170553.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "鸭头",
            "doc_count": 4665,
            "sale": {
              "value": 57519.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 58,
              "sum_other_doc_count": 4330,
              "buckets": [
                {
                  "key": "杭州",
                  "doc_count": 198
                },
                {
                  "key": "宁波",
                  "doc_count": 137
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 14,
              "sum_other_doc_count": 4019,
              "buckets": [
                {
                  "key": "沙县小吃",
                  "doc_count": 596
                },
                {
                  "key": "福建沙县小吃",
                  "doc_count": 50
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 4665,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1133292532",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/wmproductdwm/cd164aef557fd1909565573fdd1ee0e0182340.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "薯条",
            "doc_count": 8823,
            "sale": {
              "value": 57305.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 90,
              "sum_other_doc_count": 8273,
              "buckets": [
                {
                  "key": "东莞",
                  "doc_count": 351
                },
                {
                  "key": "泉州",
                  "doc_count": 199
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 20,
              "sum_other_doc_count": 8617,
              "buckets": [
                {
                  "key": "正新鸡排",
                  "doc_count": 113
                },
                {
                  "key": "贝克汉堡",
                  "doc_count": 93
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 8823,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "226811420",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/wmproductdwm/2858cc2f4aa34244b58d2ace0dd6226e100328.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "茶叶蛋",
            "doc_count": 2678,
            "sale": {
              "value": 57295.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 38,
              "sum_other_doc_count": 2529,
              "buckets": [
                {
                  "key": "泉州",
                  "doc_count": 75
                },
                {
                  "key": "杭州",
                  "doc_count": 74
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 8,
              "sum_other_doc_count": 2538,
              "buckets": [
                {
                  "key": "沙县小吃",
                  "doc_count": 77
                },
                {
                  "key": "杭州小笼包",
                  "doc_count": 63
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 2678,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "143136916",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/74f07799b819baf8cc3a279bf8e9d1e4109473.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "鸡翅",
            "doc_count": 5250,
            "sale": {
              "value": 56706.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 59,
              "sum_other_doc_count": 5023,
              "buckets": [
                {
                  "key": "重庆",
                  "doc_count": 130
                },
                {
                  "key": "长沙",
                  "doc_count": 97
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 8,
              "sum_other_doc_count": 5175,
              "buckets": [
                {
                  "key": "黄记煌三汁焖锅",
                  "doc_count": 58
                },
                {
                  "key": "沙县小吃",
                  "doc_count": 17
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 5250,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1078659621",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfudwm/912a429467fe0c885da12171979f128e195514.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "鸡心",
            "doc_count": 6066,
            "sale": {
              "value": 55419.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 108,
              "sum_other_doc_count": 5495,
              "buckets": [
                {
                  "key": "上海",
                  "doc_count": 287
                },
                {
                  "key": "沈阳",
                  "doc_count": 284
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 10,
              "sum_other_doc_count": 5999,
              "buckets": [
                {
                  "key": "菜文基",
                  "doc_count": 44
                },
                {
                  "key": "望京小腰",
                  "doc_count": 23
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 6066,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1335427757",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfudwm/1205aeaa11933ac2178003c92d100f48151227.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "玉米",
            "doc_count": 8639,
            "sale": {
              "value": 55193.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 117,
              "sum_other_doc_count": 8161,
              "buckets": [
                {
                  "key": "上海",
                  "doc_count": 242
                },
                {
                  "key": "广州",
                  "doc_count": 236
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 18,
              "sum_other_doc_count": 8500,
              "buckets": [
                {
                  "key": "杨国福麻辣烫",
                  "doc_count": 77
                },
                {
                  "key": "张亮麻辣烫",
                  "doc_count": 62
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 8639,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "758663698",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfudwm/4cc4c5a333fb014d726874c38884b44d133980.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "墨鱼丸",
            "doc_count": 9726,
            "sale": {
              "value": 54429.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 143,
              "sum_other_doc_count": 8699,
              "buckets": [
                {
                  "key": "沈阳",
                  "doc_count": 638
                },
                {
                  "key": "哈尔滨",
                  "doc_count": 389
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 21,
              "sum_other_doc_count": 9512,
              "buckets": [
                {
                  "key": "张亮麻辣烫",
                  "doc_count": 107
                },
                {
                  "key": "杨国福麻辣烫",
                  "doc_count": 107
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 9726,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "920574343",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/daa12159e1a30c009fc35fbe34fc6b44126784.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "干豆腐",
            "doc_count": 3881,
            "sale": {
              "value": 53654.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 96,
              "sum_other_doc_count": 3142,
              "buckets": [
                {
                  "key": "哈尔滨",
                  "doc_count": 428
                },
                {
                  "key": "长春",
                  "doc_count": 311
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 10,
              "sum_other_doc_count": 3805,
              "buckets": [
                {
                  "key": "杨国福麻辣烫",
                  "doc_count": 39
                },
                {
                  "key": "张亮麻辣烫",
                  "doc_count": 37
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 3881,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "92442652",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/wmproductdwm/06e766d9832bd407fbbea6a1e50cdcc391591.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "香肠",
            "doc_count": 6310,
            "sale": {
              "value": 53400.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 87,
              "sum_other_doc_count": 5746,
              "buckets": [
                {
                  "key": "泉州",
                  "doc_count": 352
                },
                {
                  "key": "上海",
                  "doc_count": 212
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 12,
              "sum_other_doc_count": 5885,
              "buckets": [
                {
                  "key": "沙县小吃",
                  "doc_count": 356
                },
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 69
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 6310,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1335355718",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/3c81ab68f405ee624223599186087352154418.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "四季豆",
            "doc_count": 3256,
            "sale": {
              "value": 53394.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 64,
              "sum_other_doc_count": 2892,
              "buckets": [
                {
                  "key": "重庆",
                  "doc_count": 244
                },
                {
                  "key": "杭州",
                  "doc_count": 120
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 9,
              "sum_other_doc_count": 3194,
              "buckets": [
                {
                  "key": "环球蔬果汇",
                  "doc_count": 33
                },
                {
                  "key": "时鲜蔬果",
                  "doc_count": 29
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 3256,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1157641381",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfudwm/a486969fe29a2695a8d40356394c947f177329.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "海带结",
            "doc_count": 5566,
            "sale": {
              "value": 53017.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 83,
              "sum_other_doc_count": 5149,
              "buckets": [
                {
                  "key": "上海",
                  "doc_count": 246
                },
                {
                  "key": "苏州",
                  "doc_count": 171
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 18,
              "sum_other_doc_count": 5400,
              "buckets": [
                {
                  "key": "菜文基",
                  "doc_count": 85
                },
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 81
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 5566,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1293375617",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/390213977e1353034fb8689f84528e1a150831.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "豆泡",
            "doc_count": 4199,
            "sale": {
              "value": 52889.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 66,
              "sum_other_doc_count": 3741,
              "buckets": [
                {
                  "key": "沈阳",
                  "doc_count": 253
                },
                {
                  "key": "长春",
                  "doc_count": 205
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 13,
              "sum_other_doc_count": 4104,
              "buckets": [
                {
                  "key": "张亮麻辣烫",
                  "doc_count": 52
                },
                {
                  "key": "杨国福麻辣烫",
                  "doc_count": 43
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 4199,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "246996594",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfudwm/5ada3dbd466d2e8e46974ef85fdbe66b116943.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "鸡蛋",
            "doc_count": 4229,
            "sale": {
              "value": 51459.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 54,
              "sum_other_doc_count": 4005,
              "buckets": [
                {
                  "key": "常州",
                  "doc_count": 113
                },
                {
                  "key": "杭州",
                  "doc_count": 111
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 12,
              "sum_other_doc_count": 4158,
              "buckets": [
                {
                  "key": "快乐番薯",
                  "doc_count": 39
                },
                {
                  "key": "重庆麻辣烫",
                  "doc_count": 32
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 4229,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "102133319",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/cd1429911055f99fb4678ceca600663869573.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "鱿鱼",
            "doc_count": 7140,
            "sale": {
              "value": 51067.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 79,
              "sum_other_doc_count": 6833,
              "buckets": [
                {
                  "key": "泉州",
                  "doc_count": 157
                },
                {
                  "key": "厦门",
                  "doc_count": 150
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 11,
              "sum_other_doc_count": 7064,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 42
                },
                {
                  "key": "黄记煌三汁焖锅",
                  "doc_count": 34
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 7140,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1244542980",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfudwm/40a71aadddf3efed6b81a393c58cda4a229558.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "山药",
            "doc_count": 7529,
            "sale": {
              "value": 50065.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 102,
              "sum_other_doc_count": 6943,
              "buckets": [
                {
                  "key": "重庆",
                  "doc_count": 372
                },
                {
                  "key": "昆明",
                  "doc_count": 214
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 20,
              "sum_other_doc_count": 7275,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 186
                },
                {
                  "key": "杨国福麻辣烫",
                  "doc_count": 68
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 7529,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "337967878",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfudwm/73dc915a7bcc78ce81653b9a2e917a38111776.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "羊肉",
            "doc_count": 2284,
            "sale": {
              "value": 49857.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 28,
              "sum_other_doc_count": 2130,
              "buckets": [
                {
                  "key": "青岛",
                  "doc_count": 82
                },
                {
                  "key": "长春",
                  "doc_count": 72
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 6,
              "sum_other_doc_count": 2230,
              "buckets": [
                {
                  "key": "黄记煌三汁焖锅",
                  "doc_count": 41
                },
                {
                  "key": "兰州拉面",
                  "doc_count": 13
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 2284,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "167399948",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/fdebce6bde003b59380360e0470f8478124805.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "鸡腿",
            "doc_count": 7864,
            "sale": {
              "value": 49849.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 122,
              "sum_other_doc_count": 7320,
              "buckets": [
                {
                  "key": "上海",
                  "doc_count": 309
                },
                {
                  "key": "苏州",
                  "doc_count": 235
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 17,
              "sum_other_doc_count": 6813,
              "buckets": [
                {
                  "key": "沙县小吃",
                  "doc_count": 961
                },
                {
                  "key": "福建沙县小吃",
                  "doc_count": 90
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 7864,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "13890741",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfudwm/620dd445f5e6f5b7e71ee9eedd8b1090143145.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "鸡尖",
            "doc_count": 3523,
            "sale": {
              "value": 49449.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 67,
              "sum_other_doc_count": 3182,
              "buckets": [
                {
                  "key": "成都",
                  "doc_count": 176
                },
                {
                  "key": "杭州",
                  "doc_count": 165
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 8,
              "sum_other_doc_count": 3502,
              "buckets": [
                {
                  "key": "三品黑鸭",
                  "doc_count": 11
                },
                {
                  "key": "不老神鸡",
                  "doc_count": 10
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 3523,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "180567851",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfudwm/cac756ebbc4942909db1bc9a9f1a3a0b138321.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "千张",
            "doc_count": 4208,
            "sale": {
              "value": 48730.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 84,
              "sum_other_doc_count": 3759,
              "buckets": [
                {
                  "key": "合肥",
                  "doc_count": 231
                },
                {
                  "key": "杭州",
                  "doc_count": 218
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 15,
              "sum_other_doc_count": 4075,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 94
                },
                {
                  "key": "杨国福麻辣烫",
                  "doc_count": 39
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 4208,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "792011512",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/9133492ac051fdfcf11f094caef9c05f130157.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "豆角",
            "doc_count": 2956,
            "sale": {
              "value": 48486.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 43,
              "sum_other_doc_count": 2768,
              "buckets": [
                {
                  "key": "锦州",
                  "doc_count": 110
                },
                {
                  "key": "上海",
                  "doc_count": 78
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 6,
              "sum_other_doc_count": 2907,
              "buckets": [
                {
                  "key": "冰城外婆铁锅焖面",
                  "doc_count": 32
                },
                {
                  "key": "麻辣香锅",
                  "doc_count": 17
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 2956,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1335305146",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfu/f7c9d7cb7d71aa264abcb61b9d9549d6371401.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "毛肚",
            "doc_count": 3941,
            "sale": {
              "value": 48028.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 49,
              "sum_other_doc_count": 3637,
              "buckets": [
                {
                  "key": "重庆",
                  "doc_count": 168
                },
                {
                  "key": "成都",
                  "doc_count": 136
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 11,
              "sum_other_doc_count": 3858,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 63
                },
                {
                  "key": "三顾冒菜",
                  "doc_count": 20
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 3941,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "227616159",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfudwm/1a7216f9bed4702af93697a585027fcb173942.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "肉筋",
            "doc_count": 1031,
            "sale": {
              "value": 47707.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 22,
              "sum_other_doc_count": 912,
              "buckets": [
                {
                  "key": "沈阳",
                  "doc_count": 69
                },
                {
                  "key": "青岛",
                  "doc_count": 50
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 3,
              "sum_other_doc_count": 1027,
              "buckets": [
                {
                  "key": "姐妹烧烤",
                  "doc_count": 2
                },
                {
                  "key": "淮南牛肉汤烧烤炸串",
                  "doc_count": 2
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 1031,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1139750991",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/bcdfab9ed8c7d08707ad7eac6a8ec713195275.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "千页豆腐",
            "doc_count": 8018,
            "sale": {
              "value": 46842.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 102,
              "sum_other_doc_count": 7712,
              "buckets": [
                {
                  "key": "杭州",
                  "doc_count": 155
                },
                {
                  "key": "青岛",
                  "doc_count": 151
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 16,
              "sum_other_doc_count": 7862,
              "buckets": [
                {
                  "key": "重庆鸡公煲",
                  "doc_count": 100
                },
                {
                  "key": "张亮麻辣烫",
                  "doc_count": 56
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 8018,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1335427772",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/xianfudwm/5263cee745d2742a6d1322da1de2f57a188460.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "鲜蘑",
            "doc_count": 2876,
            "sale": {
              "value": 46821.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 73,
              "sum_other_doc_count": 2088,
              "buckets": [
                {
                  "key": "沈阳",
                  "doc_count": 460
                },
                {
                  "key": "长春",
                  "doc_count": 328
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 9,
              "sum_other_doc_count": 2824,
              "buckets": [
                {
                  "key": "张亮麻辣烫",
                  "doc_count": 30
                },
                {
                  "key": "杨国福麻辣烫",
                  "doc_count": 22
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 2876,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1269355948",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfudwm/92994c66e37f77d68c4634296fdaf195137523.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "豆干",
            "doc_count": 3088,
            "sale": {
              "value": 46742.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 35,
              "sum_other_doc_count": 2406,
              "buckets": [
                {
                  "key": "重庆",
                  "doc_count": 579
                },
                {
                  "key": "泉州",
                  "doc_count": 103
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 6,
              "sum_other_doc_count": 2782,
              "buckets": [
                {
                  "key": "沙县小吃",
                  "doc_count": 279
                },
                {
                  "key": "福建沙县小吃",
                  "doc_count": 27
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 3088,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "1140502324",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p0.meituan.net/wmproductdwm/5525f4c6b50950618a4f66da12a9bfff100770.jpg"
                    }
                  }
                ]
              }
            }
          },
          {
            "key": "鸡肉肠",
            "doc_count": 3344,
            "sale": {
              "value": 46698.0
            },
            "hot_province": {
              "doc_count_error_upper_bound": 71,
              "sum_other_doc_count": 2822,
              "buckets": [
                {
                  "key": "沈阳",
                  "doc_count": 337
                },
                {
                  "key": "长春",
                  "doc_count": 185
                }
              ]
            },
            "hot_brand": {
              "doc_count_error_upper_bound": 6,
              "sum_other_doc_count": 3320,
              "buckets": [
                {
                  "key": "张亮麻辣烫",
                  "doc_count": 14
                },
                {
                  "key": "正宗重庆麻辣烫",
                  "doc_count": 10
                }
              ]
            },
            "picture": {
              "hits": {
                "total": 3344,
                "max_score": 1.0,
                "hits": [
                  {
                    "_index": "meituan_food_v2",
                    "_type": "meituan_food_v2",
                    "_id": "432951729",
                    "_score": 1.0,
                    "_source": {
                      "picture": "http://p1.meituan.net/xianfudwm/7b274e65518b05325161ba5694d776ff163058.jpg"
                    }
                  }
                ]
              }
            }
          }
        ]
      }
    }
  }


module.exports = res;

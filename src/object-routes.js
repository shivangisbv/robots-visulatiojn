/*Routes of 100 object.
objetName is the string to define the object in the source (1-100)
routes is the route of single robots from source to destination */
const config = [
  {
    objectName: "1",
    routes: [[0, 0],
      [0, 1],
      [1, 1],
      [2, 1],
      [3, 1],
      [4, 1],
      [5, 1],
      [6, 1],
      [7, 1],
      [7, 2]
    ]
  },
  {
    objectName: "2",
    routes: [[0, 1], [1, 1], [1, 2]]
  },
  {
    objectName: "3",
    routes: [
      [0, 2],
      [0, 3],
      [1, 3],
      [2, 3],
      [3, 3],
      [4, 3],
      [4, 4],
      [4, 5],
      [4, 6],
      [4, 7],
      [4, 8],
      [4, 9],
      [4, 10],
      [4, 11],
      [4, 12],
      [5, 12]
    ]
  },
  {
    objectName: "4",
    routes: [[0, 3],[1, 3], [2,3],[2,4],[2,5],[2,6],[3, 6]]
  },
  {
    objectName: "5",
    routes: [[0, 4], [1, 4]]
  },
  {
    objectName: "6",
    routes: [[0, 5], [1, 5], [1, 6]]
  },
  {
    objectName: "7",
    routes: [[0, 6], [1, 6]]
  },
  {
    objectName: "8",
    routes: [[0, 7], [0, 8], [1, 8]]
  },
  {
    objectName: "9",
    routes: [[0, 8], [0, 9],[0,10],[0, 11], 
    [0,12], [0,13],[0,14],[1,14]]
  },
  {
    objectName: "10",
    routes: [[0, 9], [1,10]]
  },
  {
    objectName: "11",
    routes: [[0, 10], [0,11],[1,11],[1,12]]
  },
  {
    objectName: "12",
    routes: [ 
    [0,11],[1,11],[2,11],[3,11],[4,11],
    [5,11],[6,11],[7,12]]
  },
  {
    objectName: "13",
    routes: [ 
    [0,12],[1,11],[2,11],[3,11],[4,11],
    [5,11],[6,11], [7,11], [8,11],[8,12], [9,12]]
  },
  {
    objectName: "14",
    routes: [ 
    [0,13],
    [1,11],
    [2,11],[2,12],[2,13],[2,14],[2,15],[3,15], [3,14]]
  },
  {
    objectName: "15",
    routes: [ 
    [0,14],[1,11],[2,11],[3,11],[4,11],
    [5,11],[6,11],[7,12]]
  },
  {
    objectName: "16",
    routes: [ 
    [0,15],[0,16],[0,17],[0,18],[0,19],[0,20],[0,21],
    [1,21],[2,21],[3,21],[4,21],[5,21], [5,22]]
  },
  {
    objectName: "17",
    routes: [ 
    [0,16],[0,17],[0,18],[0,19],[0,20],[0,21],[0,22],[0,23],
    [1,23],[2,23],[3,23],[4,23],[5,23],[6,23],[7,23],[8,23],[9,23], [9,24]]
  },
  {
    objectName: "18",
    routes: [ 
    [0,17],[0,18],[0,19],[0,20],[0,21],
    [1,21],[2,22],[2,23],[3,23],[4,23],[5,23],[6,23],
    [6,22],[6,21],[6,20],[6,19],[6,18],
    [5,18]]
   },
{
  objectName: "19",
  routes: [ 
    [0,18],[0,19],[1,19],[2,19],[3,19],[4,19],
    [4,18],[4,17],[4,16],[4,15],[5,15],[5,16]
  ]
   },
{
    objectName: "20",
    routes: [ 
      [0,19],[1,19],[2,19],[3,19],[4,19],[5,19],[6,19],
      [6,18],[6,17],[6,16],[6,15],[6,16],[7,16]
    ]
},
{
  objectName: "21",
  routes: [ 
    [0,20],[0,21],
    [1,21],[2,21],[3,21],[4,21],
    [4,20],[4,19],[4,18],[4,17],[5,17],[5,18]
  ]
   },
   {
    objectName: "22",
    routes: [ 
      [0,21],[0,22],[0,23],
      [1,23],[2,23],[2,22],[2,21],[2,20],[1,20]
      
    ]
     },
     {
      objectName: "23",
      routes: [ 
        [0,22],[0,23],
        [1,23],
        [2,23],
        [3,23],
        [4,23],[4,24],[5,24]
      ]
       },
  {
  objectName: "24",
  routes: [ 
    [0,23],
    [1,23],
    [2,23],
    [3,23],
    [4,23],[4,24],[4,25],[4,26],[5,26]
  ]
    },
    {
    objectName: "25",
    routes: [ 
      [0,24],[0,25],
      [1,25],
      [2,25],[2,24],[3,24]]
      },
      {
      objectName: "26",
      routes: [ 
        [0,25],
        [1,25],
        [2,25],
        [2,24],
        [2,23],
        [2,22],
        [3,22]]
        },
{
objectName: "27",
routes: [ 
[0,26],[0,27],
[1,27],
[2,27],
[2,27],
[2,26],               
[3,26]]
},
{
objectName: "28",
routes: [ 
[0,27],[1,27],[1,28]
]
},
{
objectName: "29",
routes: [ 
  [0,28],[0,29],[1,29],[1,30]
]
  },
  {
  objectName: "30",
  routes: [ 
    [0,29],[1,29],[2,29],
    [2,28],[3,28]

  ]
    },
    {
    objectName: "31",
    routes: [ 
      [0,30],[0,31],[1,31],[2,31],
      [3,31],[4,31],[5,31],[6,31],[7,31],[8,31],
      [9,31],[9,32]

    ]
      },
{
objectName: "32",
routes: [ 
  [0,31],[0,31],[1,31],[2,31],
  [3,31],[4,31],[5,31],[6,31],[7,31],[8,31],
  [9,31],[9,30]
]
  },
  {
  objectName: "33",
  routes: [ 
    [0,32],[0,31],[1,31],[2,31],
  [3,31],[4,31],[5,31],[6,31],[7,31],
  [8,31],[8,32],[7,32]
  

  ]
    },
    {
    objectName: "34",
    routes: [ 
      [0,33],[0,32],[0,31],[1,31],[2,31],
  [3,31],[4,31],[5,31],[6,31],[7,31],
  [8,31],[9,31],[10,31],[10,32],[11,32]


    ]
      },
  {
  objectName: "35",
  routes: [ 
    [0,34],[0,33],[0,32],[0,31],[1,31],[2,31],
[3,31],[4,31],[5,31],[6,31],[7,31],
[8,31],[9,31],[10,31],[10,30],[11,30]

  ]
    },
  {
  objectName: "36",
  routes: [ 
    [0,35],[0,34],[0,33],[0,32],[0,31],[1,31],[2,31],
    [3,31],[4,31],[5,31],[6,31],[7,31],
    [8,31],[9,31],[10,31],[10,30],[10,29],[10,28],[11,28]            
  ]
    },
    {
    objectName: "37",
    routes: [ 
      [0,36],[0,35],[0,34],[1,34]

    ]
      },
      {
      objectName: "38",
      routes: [ 
        [0,37],[1,37],[1,36]
      ]
        },
        {
        objectName: "39",
        routes: [ 
          [0,38],[1,38]

        ]
          },
      {
      objectName: "40",
      routes: [ 
        [0,39],[0,40],[1,40]     
      ]
        },

        {
          objectName: "41",
          routes: [ 
            [0,40],[0,41],[1,41],[2,41],[3,41],[3,42]

          ]
            },
            {
              objectName: "42",
              routes: [ 
                [0,41],[1,41],[2,41],[3,41],[4,41],[5,41],[5,42],[5,43]  
              ]
                },
                {
                  objectName: "43",
                  routes: [ 
                    [0,42],  [0,41],[1,41],[2,41],[3,41],[4,41],[5,41],[5,40],    
                  ]
                    },
                    {
                      objectName: "44",
                      routes: [ 
                        [0,43], [0,42],  [0,41],[1,41],[2,41],[3,41],[4,41],[4,40],[4,39],
                        [5,39],[5,38] 
                      ]
                        },
                        {
                          objectName: "45",
                          routes: [ 
                            [0,44], [0,43], [0,42],[0,41],[1,41],[2,41],[3,41],[4,41],[4,40],[4,39],
                        [4,38],[4,37],[4,36],[5,36]    
                          ]
                            },
                            {
                              objectName: "46",
                              routes: [ 
                                [0,45],  [0,44], [0,43],  [0,42], [0,41],[1,41],[2,41],[3,41],[4,41],[4,40],[4,39],
                        [4,38],[4,37],[4,36],[4,35],[4,34],[5,34]       
                              ]
                                },
                                {
                                  objectName: "47",
                                  routes: [ 
                                   [0,46], [0,45],  [0,44], [0,43],  [0,42], [0,41],[1,41],[2,41],[3,41],[4,41],[4,40],[4,39],
                        [4,38],[4,37],[4,36],[3,36]    
                                  ]
                                    },
                                    {
                                      objectName: "48",
                                      routes: [ 
                                        [0,47],[0,46],[1,46]     
                                      ]
                                        },
                                        {
                                          objectName: "49",
                                          routes: [ 
                                            [0,48],[0,47],[1,47],[2,47],[3,47],[3,48]     
                                          ]
                                            },
                                            {
                                              objectName: "50",
                                              routes: [ 
                                                [0,49],[0,48],[1,48]
                                              ]
                                                },


      /*next 50 robots routes*/
      {
        objectName: "51",
        routes: [[0, 50],
          [0, 51],
          [1, 51],
          [2, 51],
          [3, 51],
          [4, 51],
          [5, 51],
          [6, 51],
          [7, 51],
          [7, 52]
        ]
      },
      {
        objectName: "52",
        routes: [[0, 51], [1, 51], [1,52]]
      },
      {
        objectName: "53",
        routes: [
          [0, 52],
          [0, 53],
          [1, 53],
          [2, 53],
          [3, 53],
          [4, 53],
          [4, 54],
          [4, 55],
          [4, 56],
          [4, 57],
          [4, 58],
          [4, 59],
          [4, 60],
          [4, 61],
          [4, 62],
          [5, 62]
        ]
      },
      {
        objectName: "54",
        routes: [[0, 53],[1, 53], [2,53],[2,54],[2,55],[2,56],[3, 56]]
      },
      {
        objectName: "55",
        routes: [[0, 54], [1, 54]]
      },
      {
        objectName: "56",
        routes: [[0, 55], [1, 55],[2, 55],[3, 55],[4, 55],[5, 55], [5, 56]]
      },
      {
        objectName: "57",
        routes: [[0, 56], [1, 56]]
      },
      {
        objectName: "58",
        routes: [[0, 57], [0, 58], [1, 58]]
      },
      {
        objectName: "59",
        routes: [[0, 58], [0, 59],[0,60],[0, 61], 
        [0,62], [0,63],[0,64],[1,64]]
      },
      {
        objectName: "60",
        routes: [[0, 59], [1,60]]
      },
      {
        objectName: "61",
        routes: [[0, 60], [0,61],[1,61],[1,62]]
      },
      {
        objectName: "62",
        routes: [ 
        [0,61],[1,61],[2,61],[3,61],[4,61],
        [5,61],[6,61],[7,62]]
      },
      {
        objectName: "63",
        routes: [ 
        [0,62],[1,61],[2,61],[3,61],[4,61],
        [5,61],[6,61], [7,61], [8,61],[8,62], [9,62]]
      },
      {
        objectName: "64",
        routes: [ 
        [0,63],
        [1,61],
        [2,61],[2,62],[2,63],[2,64],[2,65],[3,65],[3,64]]
      },
      {
        objectName: "65",
        routes: [ 
          [0,64],[0,65],[0,66],[1,66]
      ]
      },
      {
        objectName: "66",
        routes: [ 
          [0,65],[1,65],[2,65],[3,65],[4,65],[5,65],[6,65],[7,65],[7,64]
        ]
      },
      {
        objectName: "67",
        routes: [ [0,66],[0,65],[1,65],[2,65],[3,65],[4,65],[5,65],[6,65],[7,65],[8,65],
        [9,65],[9,64]     
    ]
  },
  {
    objectName: "68",
    routes: [
      [0,67],[1,67], [1,68]
    ]
  },
  {
    objectName: "69",
    routes: [
     [0,68],[0,69],[1,69],[2,69],[3,69],[3,68]
    ]
  },
  {
    objectName: "70",
    routes: [
      [0,69],[1,69],[2,69],[3,69],[4,69],[5,69],[5,68]
    ]
  },
  {
    objectName: "71",
    routes: [
      [0,70],[0,71],[1,71],[2,71],[3,71],[4,71],[5,71],[5,70]
    ]
  },
  {
    objectName: "72",
    routes: [
      [0,71],[1,71],[2,71],[3,71],[4,71],[5,71],[6,71],[7,71],[7,70]
  ]
  },
  {
    objectName: "73",
    routes: [
      [0,72],[0,73],[1,73],[2,73],[3,73],[4,73],[5,73],[5,72]
    ]
  },
  {
    objectName: "74",
    routes: [
      [0, 73], [1, 73], [2, 73],[3,73],[3,72]
  ]
  },
  {
    objectName: "75",
    routes: [[0, 74], [0, 73],[0,72],[0, 71], 
    [0,70],[1,70]]
  },
  {
    objectName: "76",
    routes: [
      [0, 75],[1,75],[1,74]
      ]
  },
  {
    objectName: "77",
    routes: [[0, 76], [0,75],[1,75],[2,75],[3,75],[3,74]
  ]
  },
  {
    objectName: "78",
    routes: [ 
    [0,77],[1,76]]
  },
  {
    objectName: "79",
    routes: [ 
    [0,78],[1,78]]    
  },
  {
    objectName: "80",
    routes: [ 
      [0,79],[0,79],[0,80],[0,81],[1,81],[2,81],[3,81],[4,81],
      [5,81],[6,81],[7,81],[7,82]
    ]
  },
  {
    objectName: "81",
    routes: [ 
    [0,80],[1,81],[2,81],[3,81],[4,81],
    [5,81],[6,81],[7,81],[7,80]
  ]
  },
  {
    objectName: "82",
    routes: [ 
      [0,81],[1,81],[2,81],[3,81],[4,81],[5,81],
      [6,81],[7,81],[8,81],[9,81],[9,82]
  ]
  },
  {
    objectName: "83",
    routes: [ 
    [0,82],[0,81],[1,81],[2,81],[3,81],[4,81],[5,81],
    [6,81],[7,81],[8,81],[9,81],[10,81],[11,81],[11,80]
  ]
  },
  {
    objectName: "84",
    routes: [ 
    [0,83],[1,83],[1,84]
  ]
   },
{
  objectName: "85",
  routes: [ 
   [0,84],[0,84],[0,85],[1,85],[2,85],[3,85],[4,85],[5,85],[6,85],
      [7,85],[8,85],[9,85],[9,86]
  ]
   },
{
    objectName: "86",
    routes: [ 
      [0,85],[1,85],[2,85],[3,85],[4,85],[5,85],[6,85],
      [7,85],[8,85],[9,85],[9,84]
    ]
},
{
  objectName: "87",
  routes: [ 
    [0,86],[0,85],
    [1,85],[2,85],[3,85],[4,85],
    [4,84],[4,83],[4,82],[4,81],[5,81],[5,82]
  ]
   },
   {
    objectName: "88",
    routes: [ 
      [0,87],
      [1,87],[2,87],[3,87],[3,86]
    ]
     },
     {
      objectName: "89",
      routes: [ 
        [0,88],[0,89],[1,89],[2,89],
        [3,89],[4,89],[5,89],[6,89],[7,89],[8,89],[9,89],[10,89],[11,89],[12,89],[13,89],
        [14,89],[15,89],[16,89],[17,89],[18,89],[19,89],[20,89],[22,89],[23,89],[24,89],
        [25,89],[25,90]
        
      ]
       },
  {
  objectName: "90",
  routes: [ 
    [0,89],[1,89],[2,89],
      [3,89],[4,89],[5,89],[6,89],[7,89],[8,89],[9,89],[10,89],[11,89],[12,89],[13,89],[14,89],
      [15,89],[16,89],[17,89],[18,89],[19,89],[19,90]
    
  ]
    },
    {
    objectName: "91",
    routes: [ 
     [0,90],[0,91],[1,91],[2,91],
      [3,91],[4,91],[5,91],[6,91],[7,91],[8,91],[9,91],[10,91],[11,91],[12,91],[13,91],[14,91],
      [15,91],[16,91],[17,91],[18,91],[19,91],[20,91],[22,91],[23,91],[23,90]
    
    ]
      },
      {
      objectName: "92",
      routes: [ 
        [0,91],[1,91],[2,91],
  [3,91],[4,91],[5,91],[6,91],[7,91],[8,91],[9,91],[10,91],[11,91],[12,91],[13,91],[14,91],
  [15,91],[16,91],[17,91],[18,91],[19,91],[20,91],[22,91],[23,91],[24,91],[25,91],[25,92]

      ]
        },
{
objectName: "93",
routes: [ 
  [0,92],[0,92],[0,93],[1,93],[2,93],
  [3,93],[4,93],[5,93],[6,93],[7,93],[8,93],[9,93],[10,93],[11,93],[12,93],[13,93],[13,94]
]
},
{
objectName: "94",
routes: [ 
  [0,93],[1,93],[2,93],
    [3,93],[4,93],[5,93],[6,93],[7,93],[8,93],[9,93],[10,93],[11,93],[12,93],[13,93],[14,93],
    [15,93],[15,94]
]
},
{
objectName: "95",
routes: [ 
  [0,94],[0,93],[1,93],[2,93],
    [3,93],[4,93],[5,93],[6,93],[7,93],[8,93],[9,93],[10,93],[11,93],[12,93],[13,93],[14,93],
    [15,93],[16,93],[17,93],[17,94]
]
  },
  {
  objectName: "96",
  routes: [ 
    [0,95],[1,95],[2,95],
    [3,95],[4,95],[5,95],[6,95],[7,95],[8,95],[9,95],[10,95],[11,95],[11,94]

  ]
    },
    {
    objectName: "97",
    routes: [ 
      [0,96],[0,95],[1,95],[2,95],
      [3,95],[4,95],[4,96],[5,96]

    ]
      },
{
objectName: "98",
routes: [ 
  [0,97],[1,97],[2,97],[3,97],[4,97],[5,97],[6,97],
  [7,97],[8,97],[8,96]
  
]
  },
  {
  objectName: "99",
  routes: [ 
    [0,98],[0,97],[1,97],[2,97],[3,97],[4,97],[5,97],[6,97],[7,97],[7,96]
  

  ]
    },
    {
    objectName: "100",
    routes: [ 
      [0,99],[1,99],[2,99],[3,99],[4,99],[5,99],[6,99],[7,99],[8,99],
      [9,99],[9,98],


    ]
      },



  


];
export default config;



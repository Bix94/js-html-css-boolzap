var app = new Vue({
    el: '#prova',
    data: {
      counter: 0,
      user: {
        name: 'Giacomo',
        avatar: 'bix'
      },
        contatti: [
            {
              name: 'Davide',
              avatar: 'img/dave.jpg',
              visible: true ,
              messages: [
                      {
                        date: '15:30',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                      },
                      {
                        date: '15:50',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                      },
                      {
                        date: '16:15',
                        text: 'Tutto fatto!',
                        status: 'received'
                      }
                    ],
            },
            {
              name: 'Yuri',
              avatar: 'img/yuri.jpg',
              visible: false,
              messages: [
                      {
                        date: '16:30',
                        text: 'Ciao come stai?',
                        status: 'sent'
                      },
                      {
                        date: '16:30',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                      },
                      {
                        date: '16:35',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                      }
                    ],
            },
            {
              name: 'Emanuele',
              avatar: 'img/ema.jpg',
              visible: false,
              messages: [
                      {
                        date: '10:10',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                      },
                      {
                        date: '10:20',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                        },
                        {
                        date: '16:15',
                        text: 'Ah scusa!',
                        status: 'received'
                        }
                    ],
            },
            {
              name: 'Niccolo',
              avatar: 'img/papaya.jpg',
              visible: false,
              messages: [
                      {
                        date: '15:30',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                      },
                      {
                        date: '15:50',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                      }
                    ],
            },
            {
              name: 'Cristiano',
              avatar: 'img/cri.jpg',
              visible: false,
              messages: [
                {
                  date: '15:30',
                  text: 'Lo sai che ha aperto una nuova pizzeria?',
                  status: 'sent'
                },
                {
                  date: '15:50',
                  text: 'Si, ma preferirei andare al cinema Si, ma preferirei andare al cinemaSi, ma preferirei andare al cinemaSi, ma preferirei andare al cinemaSi, ma preferirei andare al cinemaSi, ma preferirei andare al cinemaSi, ma preferirei andare al cinemaSi, ma preferirei andare al cinema',
                  status: 'received'
                }
              ]
            }
        ]
  },
  // created: {
  //
  // },
  methods: {
    selectContact(index){
      this.counter = index;
    },
    // sendMessage(){
    //
    // }
  },
})

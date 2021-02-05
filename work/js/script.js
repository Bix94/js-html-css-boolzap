var app = new Vue({
    el: '#prova',
    data: {
      show: "hide",
      hide: "show",
      counter: 0,
      ricerca : '',
      newMessage: '',
      user: {
        name: 'Giacomo',
        avatar: 'bix'
      },
        contatti: [
            {
              name: 'Davide',
              avatar: 'img/dave.jpg',
              scrittura: false,
              visible: true,
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
              scrittura: false,
              visible: true,
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
              scrittura: false,
              visible: true,
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
              scrittura: false,
              visible: true,
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
              scrittura: false,
              visible: true,
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
              ]
            }
        ]
  },
  methods: {
    // collego contatore ad indice messaggi cosi vale per tutte propietà oggetto
    selectContact(index){
      this.counter = index;
    },
    addMessage(){
      if (this.newMessage.length > 0){
        // inizializzo messaggio a 0 + pusho in contatto + aggiungo classe sent
        this.contatti[this.counter].messages.push({date: moment().locale('it').format('LT'),text:this.newMessage, status:"sent"});
        // ripulisco casella input
        this.newMessage = '';
        // richiamo risposta
        setTimeout(this.responseAuto,2000);
      }
    },
    // elimino msg
    deleteMessage(index){
      this.contatti[this.counter].messages.splice(index,1);
    },
    responseAuto(){
      // risposta auto
      const risposta = {
        date: moment().locale('it').format('LT'),
        text: 'ok',
        status: 'received'
      };
      // collego sempre counter + push
      this.contatti[this.counter].messages.push(risposta);
    },
    chatFilter(){
      // ciclo for each
      this.contatti.forEach(element => {
        // se il nome include testo ricerca
        if(element.name.toLowerCase().includes(this.ricerca.toLowerCase())){
          // rendo visibile
          element.visible = true;
          // rendo invisibile
        } else element.visible = false;
      });
    }
  },
})

<template>
  <v-container class="grey lighten-5">
    <v-row v-for="j in justify" :key="j" :justify="j">
      <v-col v-for="k in 2" :key="k" md="4">
        <v-card class="pa-2" outlined tile>
          One of two columns
        </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-text-field label="encrypt test" v-model="message"></v-text-field>
      <v-btn @click="encrypt(message)" depressed color="primary">
        Encrypt Message
      </v-btn>
      <v-btn @click="decrypt(encryptMessage)" depressed color="green">
        Decrypt Message
      </v-btn>
    </v-row>
    <div class="text-center">
      <v-btn dark color="indigo" @click="snackbar = true">
        Open Snackbar
      </v-btn>

      <v-snackbar v-model="snackbar" :vertical="vertical">
        {{ text }}
        <template v-slot:action="{ attrs }">
          <v-btn color="indigo" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </v-container>
</template>

<script>
import CryptoJS from 'crypto-js';
export default {
  name: 'Home',
  data: () => ({
    justify: ['start', 'center', 'end', 'space-around', 'space-between'],
    snackbar: false,
    text: 'Lorem ipsum dolor sit amet',
    vertical: true,
    secretKey: 'RGVjb2RlIGZyb20gQmFzZTY0IGZvcm1hdA==', // Decode from Base64 format
    message: '',
    encryptMessage: '',
    decryptMessage: ''
  }),
  methods: {
    encrypt(message) {
      this.encryptMessage = CryptoJS.AES.encrypt(
        message,
        this.secretKey
      ).toString();
      console.log('encryped message: ', this.encryptMessage);
    },
    decrypt(cryptMessage) {
      const bytes = CryptoJS.AES.decrypt(cryptMessage, this.secretKey);
      this.decryptMessage = bytes.toString(CryptoJS.enc.Utf8);
      console.log('decrypt message: ', this.decryptMessage);
    }
  }
};
</script>

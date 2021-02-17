<template>
  <v-container class="grey lighten-5">
    <v-row v-for="j in justify" :key="j" :justify="j">
      <v-col v-for="k in 2" :key="k" md="4">
        <v-card class="pa-2" outlined tile>
          One of two columns
        </v-card>
      </v-col>
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
// @ is an alias to /src

export default {
  name: 'Home',
  data: () => ({
    justify: ['start', 'center', 'end', 'space-around', 'space-between'],
    snackbar: false,
    text: 'Lorem ipsum dolor sit amet',
    vertical: true
  })
};
</script>

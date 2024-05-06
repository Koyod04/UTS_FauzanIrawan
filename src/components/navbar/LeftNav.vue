<template>
        <v-navigation-drawer
          expand-on-hover
          rail
        >
          <v-list>
            <v-list-item
              prepend-avatar="src/WIN_20230926_15_38_17_Pro.jpg"
              subtitle="fauzanirawan19@gmail.com"
              title="Muhammad Fauzan Irawan"
            ></v-list-item>
          </v-list>
  
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-folder" title="Home" :to="'/home'"></v-list-item>
            <v-list-item prepend-icon="mdi-account-multiple" title="Dosen" :to="'/dosen-entry'"></v-list-item>
            <v-list-item prepend-icon="mdi-star" title="Mahasiswa" :to="'/mahasiswa-entry'"></v-list-item>
            <v-list-item prepend-icon="mdi-star" title="Ruangan" :to="'/ruangan-entry'"></v-list-item>
          </v-list>
        </v-navigation-drawer>
  
        <v-main style="height: 250px"></v-main>
  </template>
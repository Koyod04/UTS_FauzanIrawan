<template>
    <h1>ENTRY RUANGAN</h1>
    <v-container>
        <v-row>
            <v-text-field label="Kode Ruangan" variant="outlined" v-model="rgn.code"></v-text-field>
        </v-row>
        <v-row>
            <v-text-field label="Nama Ruangan" variant="outlined" v-model="rgn.nama"></v-text-field>
        </v-row>
        <v-row>
            <v-btn color="blue" @click="submitRuangan">Submit</v-btn>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { Ruangan } from '@/model/Ruangan';

export default {
    data() {
        return {
            rgn: new Ruangan(0, '')
        };
    },
    methods: {
        submitRuangan() {
            // Check all fields are filled
            if (!this.rgn.code || !this.rgn.nama) {
                alert('Mohon isi semua data sebelum mengirim.');
                return; // Stops further execution if any field is empty
            }
            // If all conditions are met
            alert(`Data Ruangan dengan nama ${this.rgn.nama} berhasil disimpan`);
            this.rgn = new Ruangan(0, ''); // Reset form
        }
    }
}
</script>




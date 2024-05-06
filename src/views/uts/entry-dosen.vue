<template>
    <h1> ENTRY DOSEN</h1>
    <v-container>
        <v-row>
            <v-text-field label="NIDN" variant="outlined" v-model="dsn.nidn"></v-text-field>
        </v-row>
        <v-row>
            <v-text-field label="Nama" variant="outlined" v-model="dsn.nama"></v-text-field>
        </v-row>
        <v-row>
            <v-btn color="blue" @click="submitDosen">Submit</v-btn>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { Dosen } from '@/model/Dosen';

export default {
    data() {
        return {
            dsn: new Dosen(0, '')
        };
    },
    methods: {
        submitDosen() {
            // Check all fields are filled
            if (!this.dsn.nidn || !this.dsn.nama) {
                alert('Mohon isi semua data sebelum mengirim.');
                return; // Stops further execution if any field is empty
            }
            // If all conditions are met
            alert(`Data Dosen ${this.dsn.nama} dengan NIDN ${this.dsn.nidn} berhasil disimpan`);
            this.dsn = new Dosen(0, ''); // Reset form
        }
    }
}
</script>




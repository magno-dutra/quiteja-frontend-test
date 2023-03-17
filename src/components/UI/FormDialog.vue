<template>
  <v-row justify="center" class="position-absolute">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">Edit User</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="2"
              >
                <v-select
                  v-model="currentUser.title"
                  :items="['mr', 'ms', 'mrs', 'miss', 'dr']"
                  label="Title"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="5"

              >
                <v-text-field
                  v-model="currentUser.firstName"
                  label="First Name"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="5"
              >
                <v-text-field
                  v-model="currentUser.lastName"
                  label="Last name"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="3"
              >
                <v-select
                  v-model="currentUser.gender"
                  :items="['male', 'female', 'other']"
                  label="Gender"
                  required
                ></v-select>
              </v-col>
              <v-col cols="6">
                <v-text-field
                v-model="currentUser.phone"
                  label="Phone"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="3">
                <input type="date" v-model="currentUser.dateOfBirth">
              </v-col>
              <v-col
                cols="12"
              >
                <v-text-field
                v-model="currentUser.location.street"
                  label="Street"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="4"
              >
                <v-text-field
                v-model="currentUser.location.city"
                  label="City"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="4"
              >
                <v-text-field
                v-model="currentUser.location.state"
                  label="State"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="4"
              >
                <v-text-field
                v-model="currentUser.location.country"
                  label="Country"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="closeDialog"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="saveChanges"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: ['user'],
  emits: ['save-changes', 'close-dialog'],
  data() {
    return {
      dialog: true,
      currentUser: this.user,
    };
  },
  methods: {
    saveChanges(){
      this.$emit('save-changes', this.currentUser);
      this.closeDialog();
    },
    closeDialog(){
      this.$emit('close-dialog');
    }
  },
};
</script>
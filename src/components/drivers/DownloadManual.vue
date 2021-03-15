<style lang="scss">
    .downloadManual {
        padding-top: 50px;
        padding-bottom: 50px;

        &-title {
            font-weight: 800;
            font-size: 30px;
            line-height: 73px;
            color: #670A4A;
        }

        &-btnWrapper {
            max-width: 300px;
            padding: 30px 50px;
            border-radius: 8px;
            background-color: #F7F3F6;
        }

        &-btn {
            height: auto !important;

            &:before {
                display: none;
            }

            &:hover {
                background-color: transparent !important;
                transform: scale(1.2);
                transition: transform 0.25s ease;
            }
        }
    }
</style>

<template>
    <v-row class="downloadManual">
        <v-col cols="12" align="center">
            <h3 class="downloadManual-title" style="font-family: 'Inter', sans-serif !important;">Preuzmite pdf</h3>
        </v-col>
        <v-col cols="12" align="center">
            <div class="downloadManual-btnWrapper">
                <v-btn text @click="downloadFile" class="downloadManual-btn">
                    <v-icon style="color: #670A4A;" size="50">
                        mdi-file-pdf
                    </v-icon>
                </v-btn>
            </div>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data() {
        return {
            url: require(`@/assets/Flaster-za-vozace.pdf`)
        }
    },
    methods: {
        forceFileDownload(response){
            const url = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', 'Flaster-za-vozace.pdf')
            document.body.appendChild(link)
            link.click()
        },
        downloadFile() {
            this.axios({
                method: 'get',
                url: this.url,
                responseType: 'arraybuffer'
            })
            .then(response => {
                this.forceFileDownload(response)
            })
        }

    }
}
</script>

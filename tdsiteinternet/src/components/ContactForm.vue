<template>
    <div class="contact-form">
        <h2>Contactez-nous !</h2>
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="name">Nom :</label>
                <input type="text" id="name" v-model="form.name" required />
            </div>
            <div class="form-group">
                <label for="email">Email :</label>
                <input type="email" id="email" v-model="form.email" required />
            </div>
            <div class="form-group">
                <label for="message">Message :</label>
                <textarea id="message" v-model="form.message" required></textarea>
            </div>
            <button type="submit">Envoyer</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'ContactForm',
    data() {
        return {
            form: {
                name: '',
                email: '',
                message: ''
            }
        };
    },
    methods: {
        async submitForm() {
            // URL du webhook Discord
            const webhookUrl = 'https://discord.com/api/webhooks/1309485318969495572/IHGFgyq3BCa0c4heSp4vTMNnAgrJFsqkomH3xjoG_WcZo7ip8MztNOPuHyljpna8nMsb';
            const payload = {
                // forme du message envoyé sur Discord
                content: `Nom: ${this.form.name}\nEmail: ${this.form.email}\nMessage: ${this.form.message}`
            };

            try {
                const response = await fetch(webhookUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });

                if (response.ok) {
                    alert('Message envoyé avec succès !');
                    this.form.name = '';
                    this.form.email = '';
                    this.form.message = '';
                } else {
                    alert('Une erreur est survenue lors de l\'envoi du message.');
                }
            } catch (error) {
                alert('Une erreur est survenue lors de l\'envoi du message.');
            }
        }
    }
};
</script>

<style scoped>
.contact-form {
    max-width: 600px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input,
textarea {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}

button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}
</style>
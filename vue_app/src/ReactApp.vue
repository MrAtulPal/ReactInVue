<template>
    <div v-if="error">Error loading component</div>
    <div v-else ref="root">Loading...</div>
</template>
  
<script>
import React from 'react';
import ReactDOM from 'react-dom/client';


export default {
    data() {
        return {
            root: null,
            error: null,
            reactcomponent: null,
        };
    },
    mounted() {
        this.fetchCom()
            .then(b => {
                this.reactcomponent = b;
                this.updateReactComponent()
                console.log('React APp : ' + this.reactcomponent)
            })
            .catch(e => {
                this.error = e;
                console.error(e)
            })
    },

    updated() {
        this.updateReactComponent();
    },

    methods: {
        async fetchCom() {

            return (await import('remoteComponents/App')).default;
        },
        updateReactComponent() {
            if (!this.reactcomponent || !!this.error) return;

            const rootElement = this.$refs.root;
            const root = ReactDOM.createRoot(rootElement);
            root.render(
                React.createElement(this.reactcomponent)
            );
        },

    },
};
</script>
  
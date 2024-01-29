<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<style>
    .button {
        @apply border-2 rounded-md py-2 px-5 text-sm font-medium w-full outline-none
    }
</style>
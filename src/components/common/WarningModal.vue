<template>
    <div v-if="isOpen" :class="['warning-modal', { two: isOpen, out: isClosing }]"
        class="fixed inset-0 flex items-center justify-center" @click="closeModal">

        <div class="modal-background flex items-center justify-center w-full h-full">
            <div class="modal max-w-sm p-4 rounded-lg shadow-lg relative" @click.stop>
                <div class="flex justify-between items-start">
                    <div class="flex items-center">
                        <font-awesome-icon class="warning-modal__triangle items-center mr-2 w-5 h-5"
                            :icon="['fas', 'triangle-exclamation']" />
                        <h2 class="modal-text text-lg font-semibold">Warning</h2>
                    </div>

                    <button @click="closeModal" class="warning-modal__exit">
                        <font-awesome-icon class="w-5 h-5" :icon="['fas', 'xmark']" />
                    </button>
                </div>
                <p class="modal-desc">{{ message }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps({
    message: String,
    isOpen: Boolean,
});

const emit = defineEmits(["close"]);

const isClosing = ref(false);

const closeModal = () => {
    isClosing.value = true;
    setTimeout(() => {
        emit('close');
        isClosing.value = false;
    }, 500); // Matches animation duration
};
</script>

<style lang="scss" scoped>
.warning-modal {
    z-index: 1000;
    position: absolute;

    @media(max-width:768px) {
        position: fixed;
    }

    &__triangle {
        color: #771505;
    }

    &__exit {
        transition: all 0.3s ease-in-out;
        padding: 4px;
        border-radius: 4px;
        color: #771505;

        &:hover {
            background-color: rgba(255, 193, 7, 0.2); // Light yellow background on hover
        }
    }

    &.two {
        transform: scale(1);

        .modal-background {
            animation: fadeIn 0.5s cubic-bezier(0.165, 0.840, 0.440, 1.000) 0.2s forwards;

            .modal {
                opacity: 0;
                animation: scaleUp 0.5s cubic-bezier(0.165, 0.840, 0.440, 1.000) 0.2s forwards;
            }
        }
    }

    &.out {
        animation: quickScaleDown 0s 0.5s linear forwards;

        .modal-background {
            animation: fadeOut 0.5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;

            .modal {
                animation: scaleDown 0.5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
            }
        }
    }
}

.modal {
    background: #ffe9d9;
    min-width: 350px;
}

.modal-text {
    color: #771505;
}

.modal-desc {
    color: #bc4c2e;
}

/* Animations */
@keyframes fadeIn {
    from {
        background: transparent;
    }

    to {
        background: transparent;
    }
}

@keyframes fadeOut {
    from {
        background: transparent;
    }

    to {
        background: transparent;
    }
}

@keyframes scaleUp {
    from {
        opacity: 0;
        transform: scale(0.8);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes scaleDown {
    from {
        opacity: 1;
        transform: scale(1);
    }

    to {
        opacity: 0;
        transform: scale(0.8);
    }
}

@keyframes quickScaleDown {
    to {
        transform: scale(0);
    }
}
</style>

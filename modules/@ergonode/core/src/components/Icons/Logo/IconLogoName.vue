/*
 * Copyright © Chen Chris. All rights reserved.
 * See LICENSE for license details.
 */
<template>
    <svg
        :width="width"
        :height="height"
        :viewBox="viewBox"
        xmlns="http://www.w3.org/2000/svg">
        <path
            :d="symbolDrawingPath"
            :fill="symbolColor" />
        <path
            v-if="fullLogo"
            :d="nameDrawingPath"
            :fill="nameColor" />
    </svg>
</template>

<script>
import {
    GRAPHITE_DARK,
    GREEN,
} from '@UI/assets/scss/_js-variables/colors.scss';

export default {
    name: 'IconLogoName',
    props: {
        fullLogo: {
            type: Boolean,
            default: true,
        },
        symbolColor: {
            type: String,
            default: GREEN,
            validator: value => /^#([A-Fa-f0-9]{6})$/.test(value),
        },
        nameColor: {
            type: String,
            default: GRAPHITE_DARK,
            validator: value => /^#([A-Fa-f0-9]{6})$/.test(value),
        },
        /**
         * Width of the component
         */
        width: {
            type: [
                Number,
                String,
            ],
            default: 171,
        },
        /**
         * Height of the component
         */
        height: {
            type: [
                Number,
                String,
            ],
            default: 48,
        },
        /**
         * Svg viewBox attribute
         */
        viewBox: {
            type: String,
            default: '0 0 171 48',
        },
    },
    computed: {
        symbolDrawingPath() {
            return 'M31.8898 13.1759V25.5366L28.3465 27.5967V17.2961L21.9775 21.0017C21.6936 19.7981 21.0652 18.7275 20.2011 17.9115L26.5749 14.2064L17.7168 9.06056L21.26 7L31.8898 13.1759ZM11.6883 17.9117L5.31486 14.2062L14.173 9.06038L10.6297 7.00026L0 13.1757V25.5364L2.65743 27.0797L3.54324 27.5925V17.2964L9.91222 21.0015C10.1957 19.7979 10.8242 18.7278 11.6883 17.9117ZM26.5739 34.8026L26.5783 30.6823L17.7158 35.8331V28.4305C17.1533 28.5999 16.5598 28.6891 15.9442 28.6891C15.3285 28.6891 14.735 28.5999 14.1726 28.4305V35.8331L5.31445 30.6872V34.8026L15.9442 40.9834L26.5739 34.8026ZM18.5488 22.9949C18.5843 22.8166 18.602 22.6337 18.602 22.4465C18.602 21.2603 17.8357 20.2526 16.7728 19.9047C16.511 19.816 16.232 19.771 15.9445 19.771C15.6567 19.771 15.3776 19.816 15.1163 19.9047C14.0573 20.2526 13.2871 21.2603 13.2871 22.4465C13.2871 22.6337 13.3048 22.8166 13.3403 22.9949H13.3447C13.4598 23.5612 13.7566 24.0651 14.1729 24.4352C14.6424 24.8633 15.2625 25.1219 15.9445 25.1219C16.6266 25.1219 17.2462 24.8633 17.7162 24.4352C18.132 24.0651 18.4288 23.5612 18.5444 22.9949H18.5488Z';
        },
        nameDrawingPath() {
            return 'M153.55 10.9541H149.865V18.2689C148.689 16.9271 147.251 16.2431 145.527 16.2431C143.515 16.2431 141.842 16.9534 140.483 18.4008C139.15 19.8478 138.471 21.6368 138.471 23.7683C138.471 25.9256 139.15 27.7146 140.483 29.162C141.816 30.5827 143.515 31.2931 145.527 31.2931C147.33 31.2931 148.794 30.5827 149.943 29.1879V30.951H153.55V10.9541ZM146.102 19.6369C147.278 19.6369 148.219 20.032 148.95 20.8475C149.682 21.6368 150.048 22.6102 150.048 23.7683C150.048 24.9522 149.682 25.9256 148.95 26.7412C148.219 27.5304 147.278 27.9251 146.102 27.9251C144.926 27.9251 143.985 27.5304 143.227 26.7412C142.496 25.9256 142.13 24.9522 142.13 23.7683C142.13 22.6102 142.496 21.6368 143.227 20.8475C143.985 20.032 144.926 19.6369 146.102 19.6369ZM89.633 18.4266C91.0707 16.9533 92.8999 16.2167 95.1215 16.2167C97.3431 16.2167 99.1723 16.9533 100.61 18.4266C102.047 19.8741 102.752 21.6631 102.752 23.7682C102.752 25.8992 102.047 27.6882 100.61 29.1357C99.1723 30.5826 97.3431 31.3193 95.1215 31.3193C92.8999 31.3193 91.0707 30.5826 89.633 29.1357C88.1958 27.6882 87.4902 25.8992 87.4902 23.7682C87.4902 21.6631 88.1958 19.8741 89.633 18.4266ZM95.1217 27.8724C96.2454 27.8724 97.1604 27.4778 97.9178 26.6885C98.6756 25.8729 99.068 24.8995 99.068 23.7682C99.068 22.6365 98.6756 21.6631 97.9178 20.8738C97.1604 20.0845 96.2454 19.6895 95.1217 19.6895C93.9981 19.6895 93.0569 20.0845 92.2991 20.8738C91.5413 21.6631 91.1754 22.6365 91.1754 23.7682C91.1754 24.8995 91.5413 25.8729 92.2991 26.6885C93.0569 27.4778 93.9981 27.8724 95.1217 27.8724ZM59.6094 16.6115V30.9511H63.2943V24.1362C63.2943 21.1633 64.6793 19.7948 66.7703 19.7948C67.2929 19.7948 67.8678 19.9005 68.4693 20.0847L68.7824 16.5325C68.2075 16.3216 67.6326 16.2168 67.0577 16.2168C65.3065 16.2168 64.0003 16.9798 63.138 18.532V16.6115H59.6094ZM56.9458 25.0836H46.2568C46.7798 27.1094 48.1648 28.1359 50.4121 28.1359C51.9539 28.1359 53.783 27.5308 55.0117 26.6884L56.475 29.2934C54.672 30.6089 52.6076 31.2666 50.2553 31.2666C47.7463 31.2666 45.8387 30.53 44.506 29.083C43.1728 27.636 42.5195 25.8465 42.5195 23.7681C42.5195 21.5845 43.1994 19.7951 44.5844 18.3739C45.9693 16.9533 47.7463 16.2429 49.9413 16.2429C52.0061 16.2429 53.7312 16.9007 55.0639 18.1898C56.3971 19.4794 57.0765 21.2157 57.0765 23.4524C57.0765 23.9523 57.0242 24.5043 56.9458 25.0836ZM46.2567 22.3207H53.496C53.1559 20.4528 51.8232 19.3211 49.9413 19.3211C48.0859 19.3211 46.701 20.4528 46.2567 22.3207ZM84.9046 16.6115H81.5071V18.19C80.3311 16.9005 78.8673 16.2432 77.1165 16.2432C75.0522 16.2432 73.3275 16.9531 71.9421 18.3479C70.5571 19.7423 69.8516 21.505 69.8516 23.6364C69.8516 25.7679 70.5048 27.5038 71.8375 28.8986C73.1703 30.293 74.8692 30.9775 76.9602 30.9775C78.7894 30.9775 80.2528 30.3719 81.3503 29.1359V29.8721C81.3503 32.1877 79.7301 33.8451 76.9079 33.8451C75.2351 33.8451 73.5627 33.2927 71.9159 32.1614L70.4787 34.9506C72.3868 36.3449 74.5818 37.029 77.012 37.029C79.3382 37.029 81.2462 36.3449 82.7091 35.0032C84.1729 33.661 84.9046 31.8194 84.9046 29.53V16.6115ZM77.5087 27.741C76.3851 27.741 75.4443 27.3464 74.6865 26.5835C73.9283 25.8201 73.5629 24.8466 73.5629 23.6627C73.5629 22.5051 73.9283 21.5576 74.6865 20.7951C75.4443 20.0321 76.3851 19.637 77.5087 19.637C78.6323 19.637 79.5735 20.0321 80.3313 20.7951C81.0891 21.5576 81.455 22.5051 81.455 23.6627C81.455 24.8203 81.0891 25.7937 80.3313 26.5835C79.5735 27.3464 78.6323 27.741 77.5087 27.741ZM105.338 30.9511V16.6115H108.945V18.6109C109.702 17.2166 111.401 16.2168 113.413 16.2168C114.956 16.2168 116.288 16.743 117.36 17.7691C118.431 18.7951 118.98 20.2684 118.98 22.1894V30.9511H115.295V23.1891C115.295 20.9003 114.093 19.637 112.29 19.637C110.33 19.637 109.023 21.1366 109.023 23.2685V30.9511H105.338ZM123.524 18.4266C124.961 16.9533 126.79 16.2167 129.012 16.2167C131.233 16.2167 133.062 16.9533 134.5 18.4266C135.937 19.8741 136.643 21.6631 136.643 23.7682C136.643 25.8992 135.937 27.6882 134.5 29.1357C133.062 30.5826 131.233 31.3193 129.012 31.3193C126.79 31.3193 124.961 30.5826 123.524 29.1357C122.086 27.6882 121.381 25.8992 121.381 23.7682C121.381 21.6631 122.086 19.8741 123.524 18.4266ZM129.012 27.8724C130.136 27.8724 131.051 27.4778 131.808 26.6885C132.566 25.8729 132.958 24.8995 132.958 23.7682C132.958 22.6365 132.566 21.6631 131.808 20.8738C131.051 20.0845 130.136 19.6895 129.012 19.6895C127.888 19.6895 126.947 20.0845 126.19 20.8738C125.432 21.6631 125.066 22.6365 125.066 23.7682C125.066 24.8995 125.432 25.8729 126.19 26.6885C126.947 27.4778 127.888 27.8724 129.012 27.8724ZM170.588 25.0836H159.899C160.422 27.1094 161.807 28.1359 164.055 28.1359C165.596 28.1359 167.426 27.5308 168.655 26.6884L170.118 29.2934C168.315 30.6089 166.25 31.2666 163.898 31.2666C161.389 31.2666 159.482 30.53 158.149 29.083C156.816 27.636 156.162 25.8465 156.162 23.7681C156.162 21.5845 156.842 19.7951 158.227 18.3739C159.612 16.9533 161.389 16.2429 163.584 16.2429C165.649 16.2429 167.374 16.9007 168.707 18.1898C170.04 19.4794 170.719 21.2157 170.719 23.4524C170.719 23.9523 170.667 24.5043 170.588 25.0836ZM159.899 22.3207H167.139C166.799 20.4528 165.466 19.3211 163.584 19.3211C161.729 19.3211 160.344 20.4528 159.899 22.3207Z';
        },
    },
};
</script>

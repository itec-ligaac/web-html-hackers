<template>

<!--uk-animation-reverse uk-transform-origin-top-right  uk-scrollspy="cls: uk-animation-kenburns; repeat: true"-->
<div id="test-filter" class="full-height background-image uk-background-cover uk-overflow-hidden uk-flex uk-flex-top" uk-parallax="sepia: 100;">
    
    <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical" uk-parallax="target: #test-filter; blur: 0,35;">
        <p style="color: white; font-family: Verdana, Geneva, sans-serif; font-style: normal; text-transform: uppercase;" class="custom-title puff-in-center">Find the greatest and safest destionations!</p>
        <button class="uk-button-primary uk-button-large learn-more-button puff-in-center" @click="scrollDown">START</button>

    </div>

</div>
</template>

<script>
export default {
    name: 'Parallax',
    methods: {
        scrollDown() {
            var element = document.getElementById('scrollspy');
            var headerOffset = 77;
            var elementPosition = element.getBoundingClientRect().top;
            var offsetPosition = elementPosition - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });   
        }
    }
}
</script>

<style lang="scss" scoped>
.full-height {
    height: 100vh;
}
.puff-in-center {
	-webkit-animation: puff-in-center 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
	        animation: puff-in-center 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

@-webkit-keyframes puff-in-center {
  0% {
    -webkit-transform: scale(2);
            transform: scale(2);
    -webkit-filter: blur(4px);
            filter: blur(4px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
@keyframes puff-in-center {
  0% {
    -webkit-transform: scale(2);
            transform: scale(2);
    -webkit-filter: blur(4px);
            filter: blur(4px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}



.background-image {
    /*background-color: #CFA58D;*/
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAA1BMVEULCwvfCdJ4AAAASElEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIC3AcUIAAFkqh/QAAAAAElFTkSuQmCC");
    background-size: auto;
}

@font-face {
  font-family: chalkFontHard;
  src: url("../assets/bad_gong.ttf");
}
@font-face {
  font-family: chalkFontEasy;
  src: url("../assets/blzee.ttf");
}

@media screen and (min-width: 1y50px) {
    .custom-title {
        width: 100%;
        font-size: 1pc;
    }
}

@media screen and (min-width: 250px) {
    .custom-title {
        width: 100%;
        font-size: 1.5pc;
    }
}

@media screen and (min-width: 350px) {
    .custom-title {
        width: 100%;
        font-size: 2pc;
    }
}

@media screen and (min-width: 450px) {
    .custom-title {
        width: 100%;
        font-size: 2.5pc;
    }
}

@media screen and (min-width: 500px) {
    .custom-title {
        width: 100%;
        font-size: 3pc;
    }
}

@media screen and (min-width: 700px) {
    .custom-title {
        width: 100%;
        font-size: 4pc;
    }
}

@media screen and (min-width: 930px) {
    .custom-title {
        width: 100%;
        font-size: 5pc;
    }
}

@media screen and (min-width: 960px) {
    .custom-title {
        width: 100%;
        font-size: 3pc;
    }
}

@media screen and (min-width: 1400px) {
    .custom-title {
        width: 100%;
        font-size: 4pc;
    }
}

@media screen and (min-width: 1900px) {
    .custom-title {
        width: 100%;
        font-size: 5pc;
    }
}

.learn-more-button {
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid #a3c7bb;
  border-radius: 0.6em;
  color: #a3c7bb;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  padding: 0.7em 2em;
  text-decoration: none;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;

  &:hover,
  &:focus {
    color: #fff;
    outline: 0;
  }

  border-color: #a3c7bb;
  color: #fff;
  box-shadow: 0 0 40px 40px #a3c7bb inset, 0 0 0 0 #a3c7bb;
  transition: all 150ms ease-in-out;
  
  &:hover {
    box-shadow: 0 0 10px 0 white inset, 0 0 10px 4px white;
    border-color: white;
    background-color: transparent;
  }
}

/**
.nav-button{
    .inside-a{
        color: black;
    }
    
    display: inline-block;
    font-size: 30;
    text-decoration: none;
    background-image: linear-gradient(to right, #F16A70, #F16A70);
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: 25% 2px;
    transition: background-size .5s ease;
}

.nav-button:hover {
    background-size: 65% 2.75px;
    cursor: pointer;
}

.learn-more-button {
    background-color: Transparent;
    background-repeat: no-repeat;
    cursor: pointer;
    overflow: hidden;
    border: 1px dashed;
    border-top-color: red;
    border-left-color:  red;
    border-right-color:  red;
    border-bottom-color:  rgba(0, 0, 0, 0);
    padding: 1.5% 3%;
}

.learn-more-button:hover {
    border: 1px solid red;
    padding: 2.5% 4%;
}
**/
</style>
<template>
  <div class="home">
<!--    <Map />-->
    <div>
      <Parallax/>

    <div id="scrollspy" class="uk-width-1-1" style="padding-bottom: 5px; margin-top: 35px">
      <div>
        <vk-grid class="uk-padding-small uk-padding-remove-bottom">
          <div class="uk-width-1-1">
            <vk-card>
              <Map />
            </vk-card>
          </div>
        </vk-grid>
        <vk-grid class="uk-padding-small uk-padding-remove-top uk-flex uk-flex-center">
<!--          <div class="uk-width-1-1">-->
<!--            <vk-card>-->
<!--              <vk-card-title>Where and when do you plan on going?</vk-card-title>-->
<!--              <date-picker v-model="time" range></date-picker><br>-->
<!--            </vk-card>-->
<!--          </div>-->


          <div class="uk-width-2-3">
            <div>
              <vk-card>
                <vk-card-title>Statistics</vk-card-title>
                <CovidStats
                />
              </vk-card>
              <br>
              <vk-card>

                <div
                    data-skyscanner-widget="SearchWidget"
                    data-locale="en-GB"
                    data-market="GB"
                    data-currency="GBP"
                ></div>

              </vk-card>
            </div>
          </div>
          <div class="uk-width-1-3 uk-grid-item-match">
            <vk-card style="height: 100%">
              <!-- calendar-->
              <form>
                <fieldset class="uk-fieldset element">
                  <div class="uk-margin">
                    Choose a month when you would like to travel:
                    <input class="uk-input" type="text" placeholder="number of the month">
                  </div>
                </fieldset>
              </form>
              <br><br><br><br><br> <!-- i know i know.. -->
              <WeatherCard />
              <!-- calendar-->
            </vk-card>
          </div>
        </vk-grid>
      </div>
    </div>
    </div>
  <footer class="w3-center w3-black w3-padding-16">
    <p class="p-color">Powered by HTML Hackers</p>
  </footer>
  </div>
</template>



<script>
import Parallax from '@/components/Parallax'
import WeatherCard from '@/components/WeatherCard'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css';
import Map from '../components/Map'
import CovidStats from "../components/CovidStats";


export default {
  name: 'Home',
  components: {

    Map,
    CovidStats,
    DatePicker,
    Parallax,
    WeatherCard
  },
  data() {
      return {
          range: {
              start: new Date(2020, 0, 6),
              end: new Date(2020, 0, 23),
          },
          masks: {
              input: 'YYYY-MM-DD h:mm A',
          },
          time: null
      }
    },
  mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://widgets.skyscanner.net/widget-server/js/loader.js')
      document.head.appendChild(recaptchaScript)
    }
}
</script>

<style>
#scrollspy{
	padding-top: 5px!important;
}

.p-color{
  color: #a3c7bb;
}

.card {
    width: 100%;
    height: 100%;
    border-radius: 3px;
    background-color: #ffffff;
    box-shadow: 1px 2px 10px rgba(0, 0, 0, .2);
    -webkit-animation: open 2s cubic-bezier(.39, 0, .38, 1);
}

</style>

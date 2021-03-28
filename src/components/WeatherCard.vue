<template>
    <div class="card purple"> <!-- easter egg -->
        <h1 style="color: white">City</h1>
        <h3 style="color: white">Cloudy<span><br>Wind 10km/h <br> Precip 0%</span></h3>
        <p class="grade">23°</p>
    </div>
</template>

<style>
.grade {
    text-align: center;
    font-size: 100px;
}
.card {

  padding: 2em;
  font-family: Ubuntu;
  color: white;
  float: left;
}

.card.purple {
  background: linear-gradient(150deg, #184e68, #57ca85 100%);
}
</style>
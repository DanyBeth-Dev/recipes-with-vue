<template>
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Cabin', sans-serif;
}

body {
  background-color: white;
  color: #4C4C4C;
}

a {
  color: #f74d31;
  text-decoration: none;
}

button {
  appearance: none;
  border: none;
  background: none;
  cursor: pointer;

  background-color: #f74d31;
  font-size: 1.125rem;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}
</style>
<template>
  <div>
    <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
    <b-sidebar id="sidebar-1" title="Sidebar" shadow>
      <div class="b-sidebar-content">
        <div class="b-sidebar-header">
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>

<style scoped>
#sidebar-1 {
  width: 250px;
  margin-top: 60px; /* Ajusta el valor según sea necesario para que comience después del b-navbar */
  z-index: 1001; /* Asegura que el b-sidebar tenga un z-index más alto que el b-navbar */
}

.my-navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000; /* Establece un z-index para el b-navbar */
}

.b-sidebar-content {
  padding: 15px; /* Agrega un relleno para el contenido del sidebar */
}
</style>

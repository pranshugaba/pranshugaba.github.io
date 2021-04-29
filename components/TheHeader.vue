<template>
  <header class="h-16 mb-12 flex items-center justify-between">
    <NavLink to="/" class="font-bold text-lg"> Pranshu Gaba </NavLink>
    <div class="flex items-center justify-end space-x-4">
      <nav class="space-x-4">
        <NavLink to="/about"> About</NavLink>
        <NavLink to="/posts"> Posts</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <ColorModeToggle />
    </div>
  </header>
</template>

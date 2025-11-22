import React from "react";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-info shadow p-3 mb-5 bg-body-emphasis rounded">
      <div class="container-fluid">
        <a class="navbar-brand" href="/index.html">
          Ravendra Patel
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a
              class="nav-link active"
              aria-current="page"
              href="https://github.com/RavendraDotJava?tab=repositories"
            >
              GitHub Page
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

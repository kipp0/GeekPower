<?php include_once('./header.php') ?>
  <main>
    <section>
      <div class="container">

      <div><h1>CRUD</h1></div>
      <div>
        <form>
          <input type="text" placeholder="First Name" name="firstname">
          <input type="text" placeholder="Last Name"name="lastname">
          <button type="submit" name="submit" value="1" class="btn">Register</button>
        </form>
      </div>
    </div>
    </section>

    <section>
      <div class="container">

        <div><h1>USERS</h1></div>
        <div>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody class="tbody">
          </tbody>
        </table>
      </div>
      </div>
    </section>
  </main>
  <?php include_once('./scripts.php') ?>
  <script src="js/crud.js" type="text/javascript"></script>
<?php include_once('./footer.php') ?>

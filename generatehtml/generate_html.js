function generate_html(manager_info, engineers_array, interns_array) {
  console.log(manager_info, engineers_array, interns_array);
  return `<!DOCTYPE html>
    <html>
      <head>
        <title>My Team</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" type="text/css" href="../css/style.css" />
      </head>
      <body>
        <header>
          <h1>My Team</h1>
        </header>
        <main>
          <div class="members">
            <section class="member_card">
              <header>MemberName</header>
              <p>Etc</p>
              <p>Etc</p>
              <p>Etc</p>
              <p>Etc</p>
            </section>
          </div>
        </main>
      </body>
    </html>`
}
module.exports = generate_html;
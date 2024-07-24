function generateUsernames() {
    const name = document.getElementById('nameInput').value.trim().toLowerCase();
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    if (name) {
      const githubUsername = name.replace(/\s+/g, '-') + Math.floor(Math.random() * 1000);
      const gmailUsername = name.replace(/\s+/g, '.') + Math.floor(Math.random() * 1000);
      const otherUsername = name.replace(/\s+/g, '_') + Math.floor(Math.random() * 1000);

      outputDiv.innerHTML = `
        <div>GitHub Username: ${githubUsername}</div>
        <div>Gmail Username: ${gmailUsername}</div>
        <div>Other Username: ${otherUsername}</div>
      `;
    } else {
      outputDiv.innerHTML = '<div>Please enter a valid name.</div>';
    }
  }
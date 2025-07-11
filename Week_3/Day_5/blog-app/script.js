const apiUrl = "http://localhost:5000/posts";

document
  .getElementById("postForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    if (!title || !content) {
      alert("Please fill in both fields.");
      return;
    }

    await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";

    fetchPosts();
  });

async function fetchPosts() {
  const res = await fetch(apiUrl);
  const posts = await res.json();

  const postsContainer = document.getElementById("posts");
  postsContainer.innerHTML = "";

  posts.forEach((post) => {
    const div = document.createElement("div");
    div.className = "post";
    div.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <button onclick="deletePost(${post.id})">Delete</button>
        `;
    postsContainer.appendChild(div);
  });
}

async function deletePost(id) {
  await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
  fetchPosts();
}

fetchPosts(); // Load posts on page load

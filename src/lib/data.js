 

export const getPosts = async () => {
  try {
    const res = await fetch("https://gitstartup.net/api/blogs", {
      cache: 'no-store',
    })
    return res.json()
  } catch (err) {
    console.log(err);
    throw new Error("Oops, Failed to fetch posts!");
  }
};

export const getPostDetails = async (slug) => {
  try {
    const res = await fetch(`https://gitstartup.net/api/blogs/${slug}`)
    return res.json()
  } catch (err) {
    console.log(err);
    throw new Error("Oops, Failed to fetch post!");
  }
};

 
export const getPartners = async () => {
  try {
    const res = await fetch("https://gitstartup.net/api/partners", {
      cache: 'no-store',
    })
    return res.json()
  } catch (err) {
    console.log(err);
    throw new Error("Oops, Failed to fetch partners!");   
  }
};


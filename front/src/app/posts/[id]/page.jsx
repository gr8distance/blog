const getData = async (id) => {
  const res = await fetch(`http://localhost:4000/api/blogs/fetch/${id}`, { cache: 'no-store' });
  const body = await res.json();
  return body.post;
}

const Posts = async ({ params: params}) => {
  const { id: id } = params;
  const post = await getData(id);

  return (
    <>
      <section className="bg-gray-900">
        <div className="w-3/4 mx-auto">
          <div className="grid grid-cols-3">
            <div className="grid col-span-2">
              <div className="p-10">
                <h1 className="text-3xl">{post.title}</h1>
                <img src={post.header_image} />
                <div dangerouslySetInnerHTML={ { __html: post.body } } />
              </div>
            </div>

            <div className="grid col-span-1">
              <p>{post.id}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Posts;

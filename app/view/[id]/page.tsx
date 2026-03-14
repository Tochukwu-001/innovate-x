import { db } from "@/config/firebase";
import { doc, getDoc } from "firebase/firestore";

const singlePost = async (id: string) => {
  if (!id) return null;

  try {
    const docRef = doc(db, "innovations", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      return { id, ...docSnap.data() };
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  } catch (error) {
    console.error("An error occurred", error);
    alert("Oops, somthing went wrong");
  }
};

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

const page = async ({ params }: PageProps) => {
  const { id } = await params;
  const post = await singlePost(id);

  console.log(post);

  return (
    <main className="min-h-dvh max-w-3xl mx-auto py-10 m-3">
      <section className="flex flex-col gap-5 shadow-sm p-10 rounded-md">
        <h1 className="font-bold text-3xl text-center">{post.title}</h1>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img className="rounded-full" src={post.userImage} alt={post.userName} />
            <h1>{post.userName}</h1>
          </div>
          <span>{post.timestamp}</span>
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold text-gray-400">Community Problems:</h2>
          <p>{post.problem}</p>
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold text-gray-400">Materials:</h2>
          <p>{post.materials}</p>
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold text-gray-400">Prototype Description:</h2>
          <p>{post.prototype}</p>
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold text-gray-400">Projected Impact:</h2>
          <p>{post.impact}</p>
        </div>
      </section>
    </main>
  );
};

export default page;

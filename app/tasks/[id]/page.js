import EditForm from "@/components/EditForm";
import Link from "next/link";
import { getSingleTask } from "@/utils/actions";

const SingleTaskPage = async ({ params }) => {
  const singleTask = await getSingleTask(params.id);
  return (
    <>
      <div className="mb-16">
        <Link href="/tasks" className="btn btn-accent">
          back to tasks
        </Link>
      </div>
      <EditForm singleTask={singleTask} />
    </>
  );
};

export default SingleTaskPage;

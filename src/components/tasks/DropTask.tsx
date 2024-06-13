import { useDroppable } from "@dnd-kit/core";

type DropTaskProps = {
  status: string;
};

export default function DropTask({ status }: DropTaskProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: status,
  });
  return (
    <div
      ref={setNodeRef}
      className="text-sm font-semibold uppercase p-2 border border-dashed border-slate-500 mt-5 place-content-center text-slate-500"
    >
      {" "}
      Soltar Tarea aqui - {status}
    </div>
  );
}

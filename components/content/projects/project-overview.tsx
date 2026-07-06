export const ProjectOverview = ({
  data,
  title,
}: {
  data: string[];
  title: string;
}) => {
  return (
    <div>
      <h1 className="font-hankenGrotesk text-3xl font-semibold">{title}</h1>
      <ul className="mt-4 flex flex-col pl-10">
        {data?.map((item, i) => (
          <li
            className="text-muted-foreground list-disc text-lg leading-8"
            key={i}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

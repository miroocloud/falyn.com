import Anchor from "@achor";
import Image from "next/image";
import { type Projects } from "contentlayer/generated";

export default function ProjectsList(props: Projects) {
  const { _id, title, summary, homepage, stack, maskColor } = props;
  return (
    <div
      key={_id}
      className="group relative flex flex-col rounded-lg border p-4 shadow-md hover:shadow-lg dark:shadow-gray-700 dark:hover:shadow-gray-700/50"
    >
      <Anchor href={homepage} newWindow>
        <div className="flex-1 px-2 py-4">
          {/* <div
            style={{ backgroundColor: "#bfdcff" }}
            className="h-40 w-full flex justify-center items-center rounded-lg"
          >
            <div
              id="mask-background"
              style={{ backgroundColor: maskColor || "black" }}
              className="mask p-4"
            >
              <Image
                className="relative m-4"
                src={`/img-content/project/${title.toLocaleLowerCase()}.png`}
                quality={80}
                alt={`${title} Logo`}
                width={58}
                height={58}
              />
            </div>
          </div> */}
          <div className="pt-4">
            <h2 className="text-2xl font-bold text-foreground">{title}</h2>
            <p className="text-muted-foreground">{summary}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {stack.map((tech, i) => {
              const { label, bgColor, textColor } = tech;
              return (
                <div
                  key={i}
                  style={{
                    backgroundColor: bgColor || "#DBEAFE",
                    color: textColor || "#1E40AF",
                  }}
                  className="flex items-center justify-center gap-1 rounded-full border px-3 py-2"
                >
                  <div className="text-xs leading-4 font-medium">{label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </Anchor>
    </div>
  );
}

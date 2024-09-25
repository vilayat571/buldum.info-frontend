import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../layout/Layout";
import { components } from "../../constants/coComponents";
import { ComponentType, useEffect } from "react";

export interface IComponents {
  id: number;
  slug: string;
  name: string;
  component: ComponentType<unknown>; // Use ComponentType<any> to support components with any props
}

const OtherDetail = () => {
  const { slug } = useParams();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Enables smooth scrolling
    });
  }, []); // Runs only on component mount

  const navigate = useNavigate();

  const changeSlug = (slugUrl: string) => {
    navigate(`/detallar/${slugUrl}`);
  };

  const filteredComponent: IComponents | undefined = components.find(
    (component) => component.slug === slug
  );

  console.log(filteredComponent);

  return (
    <Layout>
      <div className="grid w-full grid-cols-4 gap-6 px-0 py-12">
        <div className="flex flex-col h-[388px] gap-y-1 rounded px-4 py-4 bg-white =">
          {components.map((component) => {
            return (
              <div
                onClick={() => changeSlug(component.slug)}
                className={`cursor-pointer col-span-1 ${
                  component.slug === slug
                    ? "bg-[#DC2625] text-white rounded"
                    : "hover:rounded hover:bg-[#F8F8F8] hover:text-black"
                } flex items-left text-left justify-start py-4 px-3`}
                key={component.id}
              >
                <span>{component.name}</span>
              </div>
            );
          })}
        </div>

        <div className="col-span-3 bg-white px-5 py-6 rounded">
          {filteredComponent?.component ? (
            <filteredComponent.component /> // Render the component as a JSX element
          ) : (
            <p>No component found</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default OtherDetail;

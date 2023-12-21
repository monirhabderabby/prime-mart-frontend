import { Skeleton } from "../ui/Skeleton";
import Container from "../ui/container";

const LandingPageLoader = () => {
  const loaderArr = [1, 2, 3, 4];
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8 space-y-10">
          <div className="">
            <Skeleton className="md:aspect-[2.4/1] h-[495px] w-full bg-slate-100" />
          </div>
          <Skeleton className="h-7 w-48 rounded-3xl bg-slate-100" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4">
            {loaderArr?.map((item) => (
              <div
                key={item}
                className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
              >
                <Skeleton className="h-[259px] w-[259px]  aspect-square rounded-xl bg-gray-100 relative" />
                <Skeleton className="h-3 w-4/6 bg-slate-100" />
                <Skeleton className="h-3 w-1/2 bg-slate-100" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LandingPageLoader;

const FullPage = (props: any) => {
  return (
    <main className="-mt-32">
      <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {props.isPadded === undefined || props.isPadded === true ? (
            <div className="px-4 py-8 sm:px-12 sm:py-12">{props.children}</div>
          ) : (
            <div>{props.children}</div>
          )}
        </div>
      </div>
    </main>
  );
};

export default FullPage;

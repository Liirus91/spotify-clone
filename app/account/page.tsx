import Header from '@/components/Header';
import AccountContent from './components/AccountContent';

const Account = () => {
  return (
    <div className="h-full w-full rounded-lg bg-neutral-900 overflow-hidden overflow-y-auto">
      <Header className="from-bg-neutral-500">
        <div className="flex mb-2 flex-col gap-y-6">
          <h1 className="font-semibold text-white text-3xl">
            Account settings
          </h1>
        </div>
      </Header>
      <AccountContent />
    </div>
  );
};

export default Account;

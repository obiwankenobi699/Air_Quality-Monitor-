import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/components/ui/use-toast';
import { Wallet, ChevronDown, Wallet2, PlugZap, Shield } from 'lucide-react';

export type ConnectWalletButtonProps = {
  label?: string;
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link';
  className?: string;
  align?: 'end' | 'start' | 'center';
};

const ConnectWalletButton: React.FC<ConnectWalletButtonProps> = ({
  label = 'Connect Wallet',
  variant = 'default',
  className,
  align = 'end',
}) => {
  const { toast } = useToast();

  const hasEthereum = typeof window !== 'undefined' && (window as any).ethereum;

  const connectMetaMask = async () => {
    try {
      if (!hasEthereum) {
        toast({
          title: 'MetaMask not detected',
          description: 'Please install MetaMask to continue.',
          variant: 'default',
        });
        window.open('https://metamask.io/download/', '_blank');
        return;
      }
      const ethereum = (window as any).ethereum;
      await ethereum.request({ method: 'eth_requestAccounts' });
      const accounts: string[] = await ethereum.request({ method: 'eth_accounts' });
      const account = accounts?.[0];
      toast({
        title: 'Connected',
        description: account ? `Connected as ${account.slice(0, 6)}...${account.slice(-4)}` : 'Wallet connected',
      });
    } catch (err: any) {
      toast({
        title: 'Connection failed',
        description: err?.message ?? 'Something went wrong while connecting to MetaMask.',
        variant: 'destructive',
      });
    }
  };

  const comingSoon = (name: string) =>
    toast({ title: `${name}`, description: 'Integration coming soon. Configure WalletConnect or provider SDK.', });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={variant} className={className}>
          <Wallet className="mr-2 h-4 w-4" /> {label}
          <ChevronDown className="ml-2 h-4 w-4 opacity-70" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align} className="w-56">
        <DropdownMenuLabel>Select a wallet</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={connectMetaMask} className="cursor-pointer">
          <Wallet2 className="mr-2 h-4 w-4" /> MetaMask
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => comingSoon('WalletConnect')} className="cursor-pointer">
          <PlugZap className="mr-2 h-4 w-4" /> WalletConnect
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => comingSoon('Coinbase Wallet')} className="cursor-pointer">
          <Shield className="mr-2 h-4 w-4" /> Coinbase Wallet
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ConnectWalletButton;

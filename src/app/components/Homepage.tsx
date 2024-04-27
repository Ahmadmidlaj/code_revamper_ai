
 "use client"
import { Label } from "../components/ui/label"
import { Button } from "../components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "../components/ui/dropdown-menu"
import { Textarea } from "../components/ui/textarea"
import { Card } from "../components/ui/card"

export default function Component() {
  return (
    <section className="container mx-auto py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="flex flex-col gap-4 p-6">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium" htmlFor="from">
            Enter Your Old code here
          </Label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" variant="outline">
                <span>English</span>
                <ChevronDownIcon className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Select a language</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Spanish</DropdownMenuItem>
              <DropdownMenuItem>French</DropdownMenuItem>
              <DropdownMenuItem>German</DropdownMenuItem>
              <DropdownMenuItem>Italian</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Textarea className="resize-none text-black" id="from" placeholder="Enter text to translate" />
        <Button className="ml-auto">Translate</Button>
      </Card>
      <Card className="flex flex-col gap-4 p-6">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium" htmlFor="to">
            Here is your latest code 
          </Label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" variant="outline">
                <span>Spanish</span>
                <ChevronDownIcon className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Select a language</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Spanish</DropdownMenuItem>
              <DropdownMenuItem>French</DropdownMenuItem>
              <DropdownMenuItem>German</DropdownMenuItem>
              <DropdownMenuItem>Italian</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Textarea className="resize-none text-black" id="to" placeholder="Translated text will appear here" />
        <Button className="ml-auto">Translate</Button>
      </Card>
    </section>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}
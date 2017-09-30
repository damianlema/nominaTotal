<?php
require('fpdf.php');

class PDF_MC_Table5 extends FPDF
{
function Header() {	}
//Pie de página
function Footer() {
	$fecha_actual=date("d/m/Y");
    $this->SetXY(-35, 10);
    $this->SetFont('Arial', '', 6); $this->Cell(10, 3, utf8_decode('Página: '), 0, 0, 'L');
    $this->SetFont('Arial', 'B', 6); $this->Cell(10, 3, $this->PageNo(), 0, 0, 'L');
    $this->SetXY(-35, 14);
    $this->SetFont('Arial', '', 6); $this->Cell(10, 3, 'Fecha: ', 0, 0, 'L');
    $this->SetFont('Arial', 'B', 6); $this->Cell(10, 3, $fecha_actual, 0, 0, 'L');
}

var $widths;
var $aligns;
var $heights;

function SetWidths($w)
{
	//Set the array of column widths
	$this->widths=$w;
}

function SetAligns($a)
{
	//Set the array of column alignments
	$this->aligns=$a;
}

function SetHeight($height)
{
	//Set the array of column height line
	$this->heights=$height;
}

function Row($data)
{
	//Calculate the height of the row
	$nb=0;
	for($i=0;$i<count($data);$i++)
		$nb=max($nb,$this->NbLines($this->widths[$i],$data[$i]));
	//$h=5*$nb;
	$h=($this->heights[0]+1)*$nb;
	//Issue a page break first if needed
	$this->CheckPageBreak($h);
	//Draw the cells of the row
	for($i=0;$i<count($data);$i++)
	{
		$w=$this->widths[$i];
		$a=isset($this->aligns[$i]) ? $this->aligns[$i] : 'L';
		//Save the current position
		$x=$this->GetX();
		$y=$this->GetY();
		//Draw the border
		$this->Rect($x,$y,$w,$h,'DF');
		//Print the text
		$this->MultiCell($w,$this->heights[0],$data[$i],0,$a);
		//Put the position to the right of the cell
		$this->SetXY($x+$w,$y);
	}
	//Go to the next line
	$this->Ln($h);
}

function CheckPageBreak($h)
{
	//If the height h would cause an overflow, add a new page immediately
	if($this->GetY()+$h>$this->PageBreakTrigger)
		$this->AddPage($this->CurOrientation);
}

function NbLines($w,$txt)
{
	//Computes the number of lines a MultiCell of width w will take
	$cw=&$this->CurrentFont['cw'];
	if($w==0)
		$w=$this->w-$this->rMargin-$this->x;
	$wmax=($w-2*$this->cMargin)*1000/$this->FontSize;
	$s=str_replace("\r",'',$txt);
	$nb=strlen($s);
	if($nb>0 and $s[$nb-1]=="\n")
		$nb--;
	$sep=-1;
	$i=0;
	$j=0;
	$l=0;
	$nl=1;
	while($i<$nb)
	{
		$c=$s[$i];
		if($c=="\n")
		{
			$i++;
			$sep=-1;
			$j=$i;
			$l=0;
			$nl++;
			continue;
		}
		if($c==' ')
			$sep=$i;
		$l+=$cw[$c];
		if($l>$wmax)
		{
			if($sep==-1)
			{
				if($i==$j)
					$i++;
			}
			else
				$i=$sep+1;
			$sep=-1;
			$j=$i;
			$l=0;
			$nl++;
		}
		else
			$i++;
	}
	return $nl;
}
}
?>
